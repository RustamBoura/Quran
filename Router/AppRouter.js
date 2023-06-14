const express = require('express')
const Router = express.Router()

const chaptersRouter = require('./chaptersRouter')
const bookmarkRouter = require('./bookmarkRouter')
const randomRouter = require('./randomRouter')
const savedRouter = require('./savedRouter')


Router.use('/chapters', chaptersRouter)
Router.use('/bookmark', bookmarkRouter)
Router.use('/random', randomRouter)
Router.use('/saved', savedRouter)


module.exports = Router