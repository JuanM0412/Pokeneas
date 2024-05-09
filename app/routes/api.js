const PokeneasApiController = require('../controllers/api/PokeneasApiController');
const express = require('express')
const router = express.Router()

router.get('/pokenea', PokeneasApiController.getPokenea);

module.exports = router
