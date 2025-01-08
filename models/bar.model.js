const mongoose = require("mongoose");

const barSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    adresse: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bar", barSchema);
