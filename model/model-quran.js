const { Schema, model } = require('mongoose')

const quranSchema = new Schema(
  {
    title: { type: String, required: true }
    
  },
  { timestamps: true }
)
// const Quran = model('Quran', quranSchema)

module.exports = {
  quranSchema
}