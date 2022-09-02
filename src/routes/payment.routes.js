const express = require('express');
const router = express.Router();

const stripeController = require("../controllers/stripe.controllers");
const paypalController = require("../controllers/paypal.controllers");

router.post('/stripe', stripeController.pay)
router.post('/paypal', paypalController.pay)

module.exports = router;