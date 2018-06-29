const r = require('request').defaults({
    json: true
})

const async = require('async')

module.exports = (app) => {
    //Read
    app.get('/', (req, res) => {
        async.parallel({
            book: (callback) => {
                r({uri: 'http://localhost:3002/book'}, (err, res, body) => {
                    if(err) {
                        callback({service: 'book', error: err})
                        return
                    }
                    if(!err && res.statusCode === 200) {
                        callback(null, body.data)
                    } else {
                        callback(res.statusCode)
                    }
                })
            },
            comment: (callback) => {
                r({uri: 'http://localhost:3003/comment'}, (err, res, body) => {
                    if(err) {
                        callback({service: 'book', error: err})
                        return
                    }
                    if(!err && res.statusCode === 200) {
                        callback(null, body.data)
                    } else {
                        callback(res.statusCode)
                    }
                })
            }
        },
        (error, results) => {
            res.json({
                error: error,
                results: results
            })
        })     
    })
}
