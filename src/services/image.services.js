const imageModule = require("../module/s3/uploadImage");
const imageRepository = require("../repositories/image.repositories");

const getAll = async () => {
  const data = await imageRepository.getAll()
  return data;
}

const uploadImage = async (image) => {
  const s3Img = await imageModule.uploadToBucket(image);
  return s3Img
};

const createRepo = async (body, image) => {
  const {name, description, categoria} = body
  const img = { name, description, categoria, url: image.Location};
  const repoImg = await imageRepository.create(img);
  return repoImg
}

module.exports = {
  getAll,
  uploadImage,
  createRepo
};
