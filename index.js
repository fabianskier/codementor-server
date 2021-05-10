const express = require('express')
const session = require('express-session')

const passport = require('./src/auth/passport.local')
const database = require('./src/utils/database')
const routes = require('./src/routes/routes')
const config = require('./src/utils/config') 

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(session({
    secret: config.SECRET,
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
    app.listen(config.PORT, () => {
        console.log(`Server: http://localhost:${config.PORT}`)
    })
).catch(err => {
    console.log(err)
})
