const logger = require('pino')()

const User = require('../models/user.model')

// Create a new user
exports.postUser = async (req, res, next) => {
    let user = new User()
    user.fullname = req.body.fullname
    user.email = req.body.email
    user.password = req.body.password

    try {
        await user.save()
        logger.info({ success: `${user.fullname} created!`})
    } catch (err) {
        logger.error({ error: err })
    }
}


