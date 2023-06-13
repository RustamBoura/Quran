const mongoose = require('mongoose')
const quranSchema = require('./model-quran')


const Quran = mongoose.model('Quran', quranSchema)

module.exports = {
  Quran
}