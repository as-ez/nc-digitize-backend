const {Schema, model} = require('mongoose')

const imageSchema = new Schema(
  {
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    url: {
        type: String,
        required: [true, 'Please add a url']
    },
    categoria: {
      type: String,
      required: [true, 'Please add a categoria']
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("image", imageSchema);