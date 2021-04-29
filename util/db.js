const dotenv = require('dotenv')
const MongoClient = require("mongodb").MongoClient

// Read and parse .env file.
dotenv.config()

// Replace the following with values for your environment.
const USERNAME = encodeURIComponent(process.env.DB_USER)
const PASSWORD = encodeURIComponent(process.env.DB_PASS)
const CLUSTER  = process.env.DB_CLUSTER

// Replace the following with your MongoDB deployment's connection string.
const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER}?retryWrites=true&w=majority`

// Create a new MongoClient
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Function to connect to the server.
const checkConnection = async () => {
  try {
    await client.connect()
    await listDatabases(client)
    console.log("Succesfully connect!")
  } finally {
    await client.close()
  }
};

// Function to list all databases
async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases()
  console.log("Databases:")
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`))
}

module.exports = checkConnection
