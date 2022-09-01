const express = require('express');
const router = express.Router();

const stripeController = require("../controllers/stripe.controllers");

router.post('/stripe', stripeController.pay)

module.exports = router;