
const express = require('express')
const app = express()
const userrouter = require('./router/ekstras')
const port = 4000
const connectDB = require('./config/db')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Daftar Ekstrakurikuler')
})

app.use(userrouter)

connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
