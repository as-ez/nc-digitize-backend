const { Schema, model } = require("mongoose");

const cardSchema = new Schema(
  {
    titulo: {
      type: String,
      required: [true, "Please add a title"],
    },
    include: {
      type: String,
      required: [true, "Please add a include"],
    },
    page: {
      type: String,
      required: [true, "Please add a description"],
    },
    precio: {
      type: Number,
      required: [true, "Please add a price"],
    },
    categoria: {
      type: String,
      required: [true, "Please add a category"],
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("card", cardSchema);
