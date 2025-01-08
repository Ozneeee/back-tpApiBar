const { body, validationResult, param } = require("express-validator");

const barValidation = () => {
  return [
    body("name").notEmpty().isString().withMessage("Le nom du bar est requis"),
    body("tel")
      .notEmpty()
      .isString()
      .withMessage("Le numéro de téléphone du bar est requis"),
    body("email")
      .notEmpty()
      .isString()
      .withMessage("L'adresse email du bar est requis"),
    body("adresse")
      .notEmpty()
      .isString()
      .withMessage("L'adresse postale nom du bar est requise"),
    body("description")
      .notEmpty()
      .isString()
      .withMessage("La description du bar est requise"),
  ];
};

const barSuppression = () => {
  return [
    param("barId").notEmpty().isString().withMessage("L'id du bar est requis"),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(422).json({ errors: errors.array() });
};

module.exports = {
  barValidation,
  barSuppression,
  validate,
};
