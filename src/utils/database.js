const dotenv = require('dotenv')
const mongoose = require('mongoose')

// Read and parse .env file.
dotenv.config()

// Replace the following with values for your environment.
const USERNAME = encodeURIComponent(process.env.DB_USER)
const PASSWORD = encodeURIComponent(process.env.DB_PASS)
const CLUSTER  = process.env.DB_CLUSTER
const PARAMETERS = process.env.DB_PARAMETERS

// Replace the following with your MongoDB deployment's connection string.
const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER}?${PARAMETERS}`

// Open a default mongoose connection
const database = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

module.exports = database
