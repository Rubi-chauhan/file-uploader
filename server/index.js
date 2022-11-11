const express = require("express");
const app = express()
const path = require('path')
const mongoose = require("mongoose");
const router = require('./src/routes/fileRoutes')
require('dotenv').config();
const cors = require('cors')
const session = require('express-session');
const passport = require("passport");
const cloudinary = require('cloudinary').v2





app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.set("trust proxy", 1);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7 // One Week
    }
  }))

  cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });


app.use(passport.initialize());
app.use(passport.session());

app.use('/upload' , express.static(path.join(__dirname, './uploads')))



const PORT = process.env.PORT || 4000

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})
    .then(() => app.listen(PORT, () => console.log(`Live on ${PORT}`)))

app.use('/', router)