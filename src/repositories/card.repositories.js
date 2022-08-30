const Card = require("../models/Card");

const getAll = async (queryFind) => {
  const cards = await Card.find(queryFind);
  return cards;
};

const create = async (body) => {
  const card = Card(body);
  const document = await card.save()
  return document;
};

module.exports = {
  getAll,
  create,
};
