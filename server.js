const express = require('express')
const app = express()
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')

require('dotenv').config({path: './config/config.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', mainRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Brittany Sims Photography is running on port ${process.env.PORT}`)
})