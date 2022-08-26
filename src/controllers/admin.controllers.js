const AdminModel = require("../models/Admin");
const jwt = require("jsonwebtoken");

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
    const user = await AdminModel.findOne({ email: req.body.email });
    if (!user) {
      res.json({ error: true, message: "Email incorrecto" });
      return;
    }
    if (req.body.password == user.password) {
      const token = jwt.sign({ userId: user._id }, req.app.get("secretKey"), {
        expiresIn: "1h",
      });
      res.json({ error: false, message: "Login OK", token: token });
      return;
    } else {
      res.json({ error: true, message: "Contraseña incorrecta" });
    }
  } catch (e) {
    if (e.message) {
      res.status(500).json({ status: "error", mensaje: e.message });
      return;
    }
    next(e);
  }
};

const create = async (req, res, next) => {
  const user = AdminModel(req.body)
  try {
    await user.save()
    return res.status(200).json({"ok": "true"})
  } catch(e){
    next(e)
  }
}

module.exports = {
  getAll,
  login,
  create
};
