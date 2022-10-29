const express = require('express')
const app = express()
const mongoose = require("mongoose")
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override")
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const adminRoutes = require('./routes/admin')
const loginRoutes = require('./routes/login')

require('dotenv').config({path: './config/config.env'})

require("./config/passport")(passport);

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(logger("dev"));

app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  );

app.use(passport.initialize())
app.use(passport.session())

app.use(flash());

app.use('/', mainRoutes)
app.use('/admin', adminRoutes)
app.use('/login', loginRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Brittany Sims Photography is running on port ${process.env.PORT}`)
})