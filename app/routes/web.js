const PokeneasController = require('../controllers/PokeneasController')
const express = require('express')
const router = express.Router()

router.get('/pokenea', PokeneasController.show)

module.exports = router