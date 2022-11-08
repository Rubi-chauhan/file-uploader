const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require('passport')
require('dotenv').config()
const User = require('../src/models/user')


passport.use(
    new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: `http://localhost:4000/auth/google/callback`,

    }, (accessToken, refreshToken, profile, done) => {

        const defaultUser = {
            fullName: `${profile.name.givenName} ${profile.name.familyName}`,
            email: profile.email[0].value,
            picture: profile.photos[0].value,
            googleID: profile.id
        }

        // find if the user exist with data in local db
        User.findOne({ googleID: profile.id }).then((data) => {
            if (data) {
                //if data found in returned promise that means it is existing user/old user
                return done(null, data)
            } else {
                //if not found in db then create user profile data in database
                defaultUser.save((err, data) => {
                    return done(null, data)
                })

            }
        })

    })
)

passport.serializeUser((user, done) => {
    return done(null, user._id);
  });
  
  passport.deserializeUser((id, done) => {
  
    User.findById(id, (Error, user) => {
      // Whatever we return goes to the client and binds to the req.user property
      return done(null, user);
    })
  })
  





//   passport.use(new GoogleStrategy({
//     clientID: `${process.env.GOOGLE_CLIENT_ID}`,
//     clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
//     callbackURL: "/auth/google/callback"
//   },
//     function (accessToken, refreshToken ,profile ,cb) {
  
//       user.findOne({ googleId: profile.id }, async ( Error, user) => {
  
//         if (err) {
//           return cb(err, null);
//         }
  
//         if (!doc) {
//           const newUser = new user({
//             googleId: profile.id,
//             username: profile.name.givenName,
//             email: profile.emails[0].value,
//             picture:profile.photos[0].value
//           });
  
//           await newUser.save();
//           cb(null, newUser);
//         }
//         cb(null, doc);
//       })
  
//     }));