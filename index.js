const dotenv = require('dotenv')
const express = require('express')
const session = require('express-session')

const passport = require('./src/auth/passport.local')
const database = require('./src/utils/database')
const routes = require('./src/routes/routes')

const app = express()

// Read and parse .env file.
dotenv.config()

// Replace the following with values for your environment.
const PORT = process.env.NODE_PORT || 3000
const SECRET = process.env.NODE_SECRET || 'secret'

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/api', routes)

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
