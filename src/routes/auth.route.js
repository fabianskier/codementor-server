const passport = require('passport')
const express = require('express')
const { StatusCodes, ReasonPhrases } = require('http-status-codes')

const router = express.Router()

router.post('/signup', (req, res, next) => {
    console.log(req.body)
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: ReasonPhrases.BAD_REQUEST })
        }
        if (!user) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: "User not found!" })
        }
        req.logIn(user, (err) => {
            if (err) {
                return res.status(StatusCodes.BAD_REQUEST).json({ message: ReasonPhrases.BAD_REQUEST })
            }
            return res.status(StatusCodes.OK).json({ message: ReasonPhrases.OK })
        })
    })(req, res, next)
})

module.exports = router
