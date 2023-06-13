const express = require('express')
const cors = require ('cors')
const db = require('./db')
const PORT = process.env.PORT || 3001
const AppRouter = require('./Router/AppRouter.js')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('landing page')
})

app.use('/api', AppRouter)