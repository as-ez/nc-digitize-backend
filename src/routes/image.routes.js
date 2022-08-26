const express = require('express');
const router = express.Router();

const imageController = require("../controllers/image.controllers")
const imageMiddleware = require('../middleware/image.middleware')

router.get('/', imageController.getAll);
router.post('/', imageMiddleware.verifyFile, imageController.create);

module.exports = router;