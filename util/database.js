const dotenv = require('dotenv')
const MongoClient = require("mongodb").MongoClient

// Read and parse .env file.
dotenv.config()

// MongoDB instance
let mongodb;

// Replace the following with values for your environment.
const USERNAME = encodeURIComponent(process.env.DB_USER)
const PASSWORD = encodeURIComponent(process.env.DB_PASS)
const CLUSTER  = process.env.DB_CLUSTER

// Replace the following with your MongoDB deployment's connection string.
const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER}?retryWrites=true&w=majority`

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

// Function to connect to the server.
const main = async () => {
  try {
    await client.connect()
    mongodb = client.db()
    console.log('Connected!')
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

// Get mongodb instance.
const getInstance = async () => {
    try {
        await main()
    } catch (e) {
        console.error(e)
    }

    if(mongodb) {
        return mongodb
    }
    throw 'Instance not found!'
}

module.exports = getInstance
