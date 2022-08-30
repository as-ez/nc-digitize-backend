const express = require('express');
const router = express.Router();

const mainRouter = require('./main.routes')
const cardRouter = require('./card.routes')
const imageRouter = require('./image.routes')
const adminRouter = require('./admin.routes')
const paymentRouter = require('./payment.routes')

router.use('/', mainRouter)
router.use('/api/cards', cardRouter)
router.use('/api/images', imageRouter)
router.use('/api/admin', adminRouter)
router.use('/api/payment', paymentRouter)

module.exports = router;