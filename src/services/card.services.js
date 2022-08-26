const dataRepository = require("../repositories/card.repositories");

const getAll = async () => {
  const data = await dataRepository.getAll();
  return data;
};

const create = async (body) => {
  const data = await dataRepository.create(body);
  return data;
};

module.exports = {
  getAll,
  create
};
