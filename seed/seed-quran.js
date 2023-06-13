const db = require('../db')
const { Quran } = require('../model/model-quran')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  try {
    const quran = [
    {title: 'Checking to see if it works'}
  ]
  
  await Quran.insertMany(quran)
  console.log('Checking to see if it works')
} catch (error) {
  console.error('Error, not working!:', error)
}
}

const run = async () => {
  await main()
  db.close()
}

run()