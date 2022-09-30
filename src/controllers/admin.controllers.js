const AdminModel = require("../models/Admin");
const jwt = require("jsonwebtoken");
const adminService = require('../services/admin.services')

const getAll = async (req, res, next) => {
  try {
    const adminData = await AdminModel.find();
    res.status(200).json(adminData);
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try{
    const admin = await adminService.login(req.body);
    res.status(200).json(admin);
  } catch (e) {
    if (e.message) {
      res.status(500).json({ status: "error", mensaje: e.message });
      return;
    }
    next(e);
  }
};

const create = async (req, res, next) => {
  try {
    const newAdmin = await adminService.create(req.body);
    return res.status(200).json(newAdmin);
  } catch(e){
    next(e)
  }
}

module.exports = {
  getAll,
  login,
  create
};
