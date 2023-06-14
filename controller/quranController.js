const db = require('../db')
const { Quran } = require('../model')

const getChapters = async (req, res) => {
    try {
    const chapters = await Quran.find()
    return res.status(200).json({ chapters })
} catch (error) {
    return res.status(500).send(error.message);
}
}
const getBookmark = async (req, res) => {
    try {
    const bookmark = await Quran.find()
    return res.status(200).json({ bookmark })
} catch (error) {
    return res.status(500).send(error.message);
}
}
const getSaved = async (req, res) => {
    try {
    const saved = await Quran.find()
    return res.status(200).json({ saved })
} catch (error) {
    return res.status(500).send(error.message);
}
}
const getRandom = async (req, res) => {
    try {
    const random = await Quran.find()
    return res.status(200).json({ random })
} catch (error) {
    return res.status(500).send(error.message);
}
}


module.exports = {
    getChapters,
    getBookmark,
    getSaved,
    getRandom,

}