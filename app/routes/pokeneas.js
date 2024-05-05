const express = require('express')
const router = express.Router()
const { getPokeneas, getPokenea } = require('../controllers/pokeneas');

router.get('/', getPokeneas)

router.get('/:id', getPokenea)

module.exports = router