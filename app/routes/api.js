const PokeneasApiController = require('../controllers/api/PokeneasApiController');
const express = require('express')
const router = express.Router()

router.get('/pokeneas', PokeneasApiController.getPokeneas);

module.exports = router