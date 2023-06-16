const { Schema, model } = require('mongoose')

const locationSchema = new Schema(
  {
    title: { type: String, required: true },
    address: { type: String, required: true }
    
  },
  { timestamps: true }
)


module.exports = {
  locationSchema
}