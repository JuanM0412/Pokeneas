const express = require('express')
const router = express.Router()
const { getPokeneas, getPokenea } = require('../controllers/pokeneas');

router.get('/api', getPokeneas)

router.get('/', getPokenea)

module.exports = router