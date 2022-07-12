require('./config/db')

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('express').json
const routes = require('./routes')

app.use(cors())

app.use(bodyParser())

app.use('/api/v1', routes)

module.exports = app