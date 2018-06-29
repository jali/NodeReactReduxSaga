const Comment = require('../model/comment')

module.exports = (app) => {

    // create
    app.post('/comment', function (req, res) {
        var newComment = new Comment(req.body)
        newComment.save((err) => {
            if (err) {
                res.json({info: 'error while comment create', error: err})
            }
            res.status(201).json({info: 'comment created successfully'})
        })
    })

    // read
    app.get('/comment', (req, res) => {
        // setInterval(function() {
        Comment.find((err, comments) => {
            if (err) {
                res.json({info: 'error while find comment', error: err})
            }
                if (comments.length > 0) {
                    res.json({info: 'comments found successfully', data: comments})
                } else {
                    res.json({info: 'there is no comments written yet'})
                }
                
            })
            
        // }, 5000);
        
    })
    
    // read one by id
    app.get('/comment/:id', (req, res) => {
        Comment.findById(req.params.id, (err, comment) => {
            if (comment) {
                res.json({info: 'comment found successfully', data: comment})
            } else {
                res.json({info: 'could not find comment', error: err})
            }
        })
    })

    // get comments by bookid
    app.get('/comment/book/:id', (req, res) => {
        var query = Comment.find({});
        query.where('bookId', req.params.id);
        query.limit(5);

        query.exec((err, comment) => {
            if (comment) {
                res.json({info: 'comments for book id found successfully', data: comment})
            } else {
                res.json({info: 'could not find comment for this specific book id', error: err})
            }
        })
    })
    

    // update
    app.put('/comment/:id', (req, res) => {
        Comment.findById (req.params.id, (err, comment) => {
            if (comment) {

                comment = Object.assign(comment, req.body)
                console.log(comment)
                comment.save((err) => {
                    if(err) {
                        res.json({info: 'error while updating comment', error: err})
                        // res.status(500).send(err)
                    }
                    res.json({info: 'comment has been updated successfully'})
                })
            } else {
                res.json({info: 'could not find comment', error: err})
            }
        })
    })

    // delete
    app.delete('/comment/:id', (req, res) => {
        Comment.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.json({info: 'error while deleting comment', error: err})
            }
            res.json({info: 'comment deleted successfully'})
        })
    })
    
}