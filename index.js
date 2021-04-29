const express = require('express')
const checkConnection = require('./util/database')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hi there!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

checkConnection()
