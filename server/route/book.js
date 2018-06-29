const Book = require('../model/book')

module.exports = (app) => {

    // create
    app.post('/book', function (req, res) {
        var newBook = new Book(req.body)
        newBook.save((err) => {
            if (err) {
                res.json({info: 'error while book create', error: err})
            }
            res.status(201).json({info: 'book created successfully'})
        })
    })

    // read
    app.get('/book', (req, res) => {
    Book.find((err, books) => {
        if (err) {
            res.json({info: 'error while find book', error: err})
        }
        if(books.length > 0) {
            res.status(200).json({info: 'books found successfully', data: books})
        }
            
        })
    })
    
    // read one by id
    app.get('/book/:id', (req, res) => {
        Book.findById(req.params.id, (err, book) => {
            if (book) {
                res.json({info: 'book found successfully', data: book})
            } else {
                res.json({info: 'could not find book', error: err})
            }
        })
    })

    // update
    app.put('/book/:id', (req, res) => {
        Book.findById (req.params.id, (err, book) => {
            if (book) {
                book = Object.assign(book, req.body)

                book.save((err) => {
                    if(err) {
                        res.json({info: 'error while updating book', error: err})
                        // res.status(500).send(err)
                    }
                    console.log(book)
                    res.json({info: 'book has been updated successfully'})
                })
            } else {
                res.json({info: 'could not find book', error: err})
            }
        })
    })

    // delete
    app.delete('/book/:id', (req, res) => {
        Book.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.json({info: 'error while deleting book', error: err})
            }
            res.json({info: 'book deleted successfully'})
        })
    })
    
}