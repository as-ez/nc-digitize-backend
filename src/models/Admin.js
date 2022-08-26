const { Schema, model } = require("mongoose");

const adminSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Please add a title"],
      unique: true
    },
    password: {
      type: String,
      required: [true, "Please add a description"],
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

module.exports = model("admin", adminSchema);