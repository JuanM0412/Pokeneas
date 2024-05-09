const { getAll } = require('../../data/pokeneas');

class PokeneasApiController {
    static getPokenea(req, res) {
        const pokeneas = getAll();

        const randomIndex = Math.floor(Math.random() * pokeneas.length);

        const randomPokenea = pokeneas[randomIndex];

        res.json({
            id: randomPokenea.id,
            name: randomPokenea.name,
            height: randomPokenea.height,
            ability: randomPokenea.ability
        });
    }
}

module.exports = PokeneasApiController;