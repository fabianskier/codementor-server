const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

const User = require('../models/user.model')

passport.serializeUser((user, done) => {
   done(null, user.id) 
})

passport.deserializeUser((id, done) => {
   User.findById(id, (err, user) => {
       done(err, user)
   }) 
})

// Local Strategy
passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    await User.findOne({ email: email })
        .then(user => {
            // Create new User
            if (!user) {
                bcrypt.genSalt(10, (err, salt) => {
                    console.log(err)
                    bcrypt.hash(password, salt, (err, hash) => {
                        const newUser = new User({ email: email, password: hash })

                        newUser
                            .save()
                                .then(user => { 
                                    return done(null, user)
                            })
                            .catch(err => {
                                console.log(err)
                            })
                        })
                })
            } else {
                // Match password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err

                    if (isMatch) { 
                        console.log('Contrasena correcta')
                        return done(null, user) 
                    } else {
                        return done(null, false, { message: "Wrong email or password" })
                    }
                })
            }
        })
        .catch(err => {
            return done(null, false, { message: err })
        })
    })
)

module.exports = passport
