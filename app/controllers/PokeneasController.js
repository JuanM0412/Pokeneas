const { getAll } = require('../data/pokeneas');

class PokeneasController {
    static show(req, res) {
        const pokeneas = getAll();
        
        const pokeneaId = Math.floor(Math.random() * pokeneas.length);
        const pokenea = pokeneas[pokeneaId];
        const { image, philosophicalPhrase } = pokenea;

        const viewData = {
            image,
            philosophicalPhrase,
        }

        res.render('pokeneas/show', {viewData: viewData})
    }
}

module.exports = PokeneasController;