const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.PORT || 3003

mongoose.connect('mongodb://localhost/comment', { useMongoClient: true })

app.use(bodyParser.json())
app.use(cors({origin: `http://localhost:3000`}));

app.use(bodyParser.urlencoded({
    extended: true
}))

const comments = require('./route/comment.js')(app)

const server = app.listen(port, () => {
    console.log(`Comment service listening at http://0.0.0.0:${port}`)
})
