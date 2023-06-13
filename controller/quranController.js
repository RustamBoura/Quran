const db = require('../db')
const { Quran } = require('../model')

const getChapters = async (req, res) => {
    try {
    const chapters = await Quran.find()
    return res.status(200).json({ collection })
} catch (error) {
    return res.status(500).send(error.message);
}
}


module.exports = {
    getChapters
}