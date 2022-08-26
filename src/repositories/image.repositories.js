const Image = require("../models/Image");

const getAll = async () => {
  const data = await Image.find();
  return data;
};

const create = async (image) => {
  const data = Image(image);
  const dataSaved = await data.save();
  return dataSaved;
};

module.exports = {
  getAll,
  create,
};
