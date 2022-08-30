const dataService = require("../services/card.services");

const getAll = async (req, res, next) => {
  try {
    let queryFind = {};
    if (req.query.categoria) {
      queryFind = {
        categoria: { $regex: ".*" + req.query.categoria + ".*", $options: "i" },
      };
    }
    const data = await dataService.getAll(queryFind);
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
};

const create = async (req, res, next) => {
  try {
    const dataSaved = await dataService.create(req.body);
    res.status(200).json(dataSaved);
  } catch (e) {
    res.json({ message: e.message });
    next(e);
  }
};

const remove = async (req, res, next) => {
  try {
    res.status(200).json({ ok: "true" });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    res.status(200).json({ ok: "true" });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
  create,
  remove,
  update,
};
