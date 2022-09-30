const express = require('express');
const router = express.Router();
const {checkJwt} = require('../middleware/auth.middleware')

const adminController = require("../controllers/admin.controllers");

router.post('/register', adminController.create)
router.post("/login", adminController.login);
router.get('/data', checkJwt, adminController.getAll);

module.exports = router;