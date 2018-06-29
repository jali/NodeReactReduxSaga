const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3010

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const bookfaces = require('./route/bookface.js')(app)

app.listen(port, () => {
    console.log(`Express server listening at http://0.0.0.0:${port}`)
})
