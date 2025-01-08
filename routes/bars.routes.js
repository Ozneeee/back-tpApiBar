const express = require("express");
const router = express.Router();

const { barsController } = require("../controllers");
const { barMiddleware } = require("../middlewares");

router.get("/allBars", barsController.getBars);

router.post(
  "/createBar",
  [barMiddleware.barValidation(), barMiddleware.validate],
  barsController.createBar
);

router.delete(
  "/:barId",
  [barMiddleware.barSuppression(), barMiddleware.validate],
  barsController.deleteBar
);

router.put(
  "/update/:barId",
  [barMiddleware.barValidation(), barMiddleware.validate],
  barsController.updateBar
);

module.exports = router;
