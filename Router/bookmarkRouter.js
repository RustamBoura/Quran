const Router = require('express').Router()
const controller = require('../controller/quranController.js')

Router.get('/', controller.getBookmark)

module.exports = Router