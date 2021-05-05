const express = require('express')
const { StatusCodes, ReasonPhrases } = require('http-status-codes')

const userController = require('../controllers/user.controller')

const router = express.Router()

router.post('/save', async (req, res, next) => {
    let user = req
    
    if (!user) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: ReasonPhrases.BAD_REQUEST })
    }
    await userController.postUser(user)
    return res.status(StatusCodes.CREATED).json({ message: ReasonPhrases.CREATED })
})

module.exports = router
