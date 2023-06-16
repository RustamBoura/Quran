const db = require('../db')
const { Quran } = require('../model/model-quran')
const { Quran } = require('../model/location')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  try {
    const location = [
    { title: 'ADAMs Main Center', address: '46903 Sugarland Rd, Sterling, VA 20164', phone: 703-433-1325 },
    { title: 'Loudoun Islamic center', address: '1507 Dodona Terrace SE Suite 210, Leesburg, VA 20175', Phone: 877-331-5005 },
    { title: 'Diyanet Center of America', address: '9610 Good Luck Rd, Lanham, MD 20706', phone: 301-459-9589 }
  ]
  
  await Location.deleteMany()
  await Location.insertMany(locations)
  console.log('Created some locations')
} catch (error) {
  console.error('Error, not working!:', error)
}
}

const run = async () => {
  await main()
  db.close()
}

run()