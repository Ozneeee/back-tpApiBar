const mongoose = require("mongoose");

const commandeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    bar: {
      type: ObjectId,
      required: true,
      ref: "bar",
    },
    date: {
      type: Date,
      required: true,
    },
    satus: {
      type: String,
      required: true,
      enum: ["en cour", "terminée"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Commande", commandeSchema);
