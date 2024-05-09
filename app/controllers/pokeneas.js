const { getAll } = require('../data/pokeneas');

const getPokeneas = (req, res) => {
    res.send({ list: getAll() });
}

const getPokenea = (req, res) => {
    res.send({ list: getAll() });
}

module.exports = { getPokeneas, getPokenea };