const dotenv = require('dotenv')
const mongoose = require('mongoose')
const logger = require('pino')()

// Read and parse .env file.
dotenv.config()

// Replace the following with values for your environment.
const USERNAME = encodeURIComponent(process.env.DB_USER)
const PASSWORD = encodeURIComponent(process.env.DB_PASS)
const CLUSTER  = process.env.DB_CLUSTER

// Replace the following with your MongoDB deployment's connection string.
const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER}?retryWrites=true&w=majority`

const database = async () => {
    try {
        await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
        logger.info({ "message": "Connected!" })
    } catch (e) {
        logger.error({ "message": e })
        console.error(e)
    } finally {
        await mongoose.disconnect()
    }
}

module.exports = database
