//Importing required modules 
const express = require('express')
const router = express.Router()
const  passport = require('passport')
require('dotenv').config()


router.get("/login/failed", (req, res) => {
    res.status(401).send("Failed to login")
})


router.get("/login/success", (req, res) => {
    if(req.user){
        res.send(`Welcome ${req.user}`)
    }else{
        res.status(403).send('Not Authorised, Please login with verified google account')
    }
}) 


router.get('/login', passport.authenticate('google', { scope: ['profile','email'] }))

router.get(
    '/auth/google/callback',
    passport.authenticate('google', 
    {
      successRedirect: process.env.CLIENT_URL +'upload', 
      failureRedirect: '/login/failed',
      failureMessage: 'Cannot login to Google, please try again later !'
    }
    ),
    (req, res) => {
      console.log('User:', req.user)
      // res.redirect(process.env.CLIENT_URL +'upload')
      res.send('Thank you for signing in')
    }
  )


  router.get('/logout', (req, res) => {
    req.session = null;
    req.logout()
    res.redirect('/login')   
  })

  module.exports = router