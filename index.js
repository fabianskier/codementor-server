const dotenv = require('dotenv')
const express = require('express')
const database = require('./src/util/database')
const logger = require('pino')()

const app = express()

// Read and parse .env file.
dotenv.config()

// Replace the following with values for your environment.
const PORT = process.env.NODE_PORT
const HOST = process.env.NODE_HOST

// GET request to the home page
app.get('/', (req, res) => {
    res.send('Home sweet home!')
})

// Database connection instance.
database().then(() => {
    // Binds and listens for connections on the specified port.
    app.listen(PORT, () => {
        logger.info({ "message": `App listening at http://${HOST}:${PORT}` })
    })
}).catch(error => {
    logger.error({ "message": error })
})
