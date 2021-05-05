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






















exports.postAddUser = (req, res, next) => {
    let user = new User()
    /*const fullname = req.body.fullname
    const email = req.body.email
    const password = req.body.password
    const date = req.body.date
*/
    user.fullname = req.body.fullname
    user.email = req.body.email
    user.password = req.body.password
    user.date = req.body.date
    /*const user = new User({
        fullname: fullname,
        email: email,
        password: password,
        date: date
    })*/

    logger.info({ "fullname": user.fullname})
    logger.info({ "email": user.email})
    logger.info({ "password": user.password})
    logger.info({ "date": user.date})

    
    user.save()
        .then(() => {
            logger.info({ "message": "User created!" })
        })
        .catch(err => {
            logger.error({ "message": err })
            console.log(err)
        })

        /*
    user.save((err, user) => {
        if (err) return callback(err, null)
        return callback(null, user)
    })*/
}
