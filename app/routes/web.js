const PokeneasController = require('../controllers/PokeneasController')
const HomeController = require('../controllers/HomeController')
const express = require('express')
const router = express.Router()

router.get('/', HomeController.index)
router.get('/pokenea', PokeneasController.show)

module.exports = router