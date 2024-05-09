const { getAll } = require('../../data/pokeneas');

class PokeneaApiController {
    static index(req, res) {
        res.send({ list: getAll() });
    }
}

module.exports = PokeneaApiController;