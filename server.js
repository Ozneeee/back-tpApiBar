const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const barsRouter = require("./routes/bars.routes");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Base de données connectée");
  })
  .catch((err) => {
    console.log(err.message);
  });

const server = express();

const corsOpts = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
  exposedHeaders: ["Content-Type"],
};

server.use(cors(corsOpts));

server.use(express.json());

server.use("/", barsRouter);

server.get("/", (req, res) => {
  res.json({ succes: true, message: "Backend Connecté" });
});

server.listen(process.env.PORT, () => {
  console.log(`Le serveur ecoute sur le port ${process.env.PORT}`);
});
