const mongoose = require("mongoose");

const biereSchema = new mongoose.Schema(
  {
    bar: {
      type: ObjectId,
      required: true,
      ref: "bar",
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    degree: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Biere", biereSchema);
