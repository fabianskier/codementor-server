const dotenv = require('dotenv')
const express = require('express')
const checkConnection = require('./util/db')

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

// Binds and listens for connections on the specified port
app.listen(PORT, () => {
  console.log(`App listening at http://${HOST}:${PORT}`)
})

checkConnection()
