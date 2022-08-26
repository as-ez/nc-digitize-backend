const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middleware/auth.middleware')

const adminController = require("../controllers/admin.controllers");

router.post('/', adminController.create)
router.post("/login", adminController.login);
router.get('/data', verifyToken, adminController.getAll);

module.exports = router;