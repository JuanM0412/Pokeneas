const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
const app = express()
const port = process.env.PORT || 3000

app.set('port', port)
app.set('views', path.join(__dirname, '../app/views'))
app.set('view engine', 'ejs')

module.exports = app;