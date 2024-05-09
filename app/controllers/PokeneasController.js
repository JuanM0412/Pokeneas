const { getAll } = require('../data/pokeneas');

class PokeneasController {
    static show(req, res) {
        const pokeneas = getAll();
        
        const pokeneaId = Math.floor(Math.random() * pokeneas.length);
        const pokenea = pokeneas[pokeneaId];
        const { image, philosophicalPhrase } = pokenea;
    }
}

module.exports = PokeneasController;