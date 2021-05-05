const logger = require('pino')()

const User = require('../models/user.model')

// Create a new user
exports.postUser = (req, res, next) => {
    let user = new User()
    console.log(user)
    user.fullname = req.body.fullname
    user.email = req.body.email
    user.password = req.body.password

    user.save().then(
        console.log(`Se creo el usuario ${user.fullname}`)
    ).catch(err => {
        console.log(err)
    })
}
