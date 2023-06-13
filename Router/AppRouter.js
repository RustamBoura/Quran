const express = require('express')
const Router = express.Router()

const chaptersRouter = require('./chaptersRouter')


Router.use('/chapters', chaptersRouter)


module.exports = Router