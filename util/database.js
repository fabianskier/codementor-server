const { MongoClient } = require("mongodb")

// Connection URI
const uri = "mongodb+srv://mongo-user:pSDZ2decbeHRiJFG@cluster0.37x9u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true })

// Get all databases
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases()
 
    console.log("Databases:")
    databasesList.databases.forEach(db => console.log(` - ${db.name}`))
}

// Check connection
const checkConnection = async () => {
    try {
        await client.connect()
        await listDatabases(client)
        console.log('Connected!')
    } finally {
        await client.close()
    }
}

module.exports = checkConnection
