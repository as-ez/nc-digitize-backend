const express = require('express');
const router = express.Router();

const cardRouter = require('./card.routes')
const imageRouter = require('./image.routes')
const adminRouter = require('./admin.routes')

router.use('/api/cards', cardRouter)
router.use('/api/images', imageRouter)
router.use('/api/admin', adminRouter)

module.exports = router;