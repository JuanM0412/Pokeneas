const { getAll } = require('../../data/pokeneas');
const os = require("os")

class PokeneasApiController {
    static getPokeneas(req, res) {
        const pokeneas = getAll();

        const randomIndex = Math.floor(Math.random() * pokeneas.length);

        const randomPokenea = pokeneas[randomIndex];

        res.json({
            id: randomPokenea.id,
            name: randomPokenea.name,
            height: randomPokenea.height,
            ability: randomPokenea.ability,
            idContainer: os.hostname()
        });
    }
}

module.exports = PokeneasApiController;