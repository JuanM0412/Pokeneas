const getPokeneas = (req, res) => {
    res.send({ list: [1, 2, 3] })
}

const getPokenea = (req, res) => {
    res.send({ list: [4, 5, 6] })
}

module.exports = { getPokeneas, getPokenea }