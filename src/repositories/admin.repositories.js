const AdminModel = require("../models/Admin");

const findOne = async (email) => {
  const admin = await AdminModel.findOne({email})
  return admin;
}

const adminData = {
  test: "ok",
};
const getAll = () => {
  return adminData;
};

const create = async (admin) => {
  const newAdmin = await AdminModel.create(admin);
  return newAdmin;
}

module.exports = {
  getAll,
  findOne,
  create
}