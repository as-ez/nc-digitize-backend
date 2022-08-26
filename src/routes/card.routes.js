const express = require('express');
const router = express.Router();

const cardController = require("../controllers/card.controllers")

router.get('/', cardController.getAll);
router.post('/', cardController.create);
router.delete('/:id', cardController.remove);
router.put('/:id', cardController.update);

module.exports = router;