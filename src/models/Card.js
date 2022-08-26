const { Schema, model } = require("mongoose");

const cardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("card", cardSchema);
