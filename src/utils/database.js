const mongoose = require('mongoose')

const config = require('./config')

// MongoDB deployment connection string.
const uri = `mongodb+srv://${config.USERNAME}:${config.PASSWORD}@${config.CLUSTER}?${config.PARAMETERS}`

// Open a default mongoose connection
const database = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

module.exports = database
