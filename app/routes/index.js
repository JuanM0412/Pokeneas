const express = require('express')
const router = express.Router()
const fs = require('fs')

const pathRouter = `${__dirname}`

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithoutExtension = removeExtension(file)
    const skip = ['index'].includes(fileWithoutExtension)
    if(!skip) {
        router.use(`/${fileWithoutExtension}`, require(`./${fileWithoutExtension}`))
        console.log('-------->', removeExtension(file))
    }
})

router.get('*', (req, res) => {
    res.status(404).send({ error: '404 Not Found' });
});

module.exports = router