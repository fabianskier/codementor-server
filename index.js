const dotenv = require('dotenv')
const express = require('express')

const database = require('./src/utils/database')
const userRoute = require('./src/routes/user.route')

const app = express()

// Read and parse .env file.
dotenv.config()

const PORT = process.env.NODE_PORT || 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', userRoute)

app.get('/', (req, res, next) => {
    res.send('Home sweet home')
})


// Connect to the database
database.then(
    app.listen(PORT, () => {
        console.log(`Server: http://localhost:${PORT}`)
    })
).catch(err => {
    console.log(err)
})
