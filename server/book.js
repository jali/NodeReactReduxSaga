const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.PORT || 3002

mongoose.connect('mongodb://localhost/book', { useMongoClient: true })

app.use(bodyParser.json())
app.use(cors({origin: `http://localhost:3000`}));

app.use(bodyParser.urlencoded({
    extended: true
}))

const books = require('./route/book.js')(app)

const server = app.listen(port, () => {
    console.log(`Book service listening at http://0.0.0.0:${port}`)
})
