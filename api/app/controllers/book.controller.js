const Book = require('../models/book.model.js');
// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    debugger;
    if(!req.body) {
        return res.status(400).send({
            message: "dewey content can not be empty"
        });
    }

    // Create a Note
    const book = new Book({
        book_id: req.body.book_id,
        cat_id: req.body.cat_id,
        class_id: req.body.class_id ,
        goodreads_book_id: req.body.goodreads_book_id ,
        best_book_id: req.body.best_book_id ,
        work_id: req.body.work_id ,
        books_count: req.body.books_count ,
        isbn: req.body.isbn ,
        isbn13: req.body.isbn13 ,
        authors: req.body.authors ,
        original_publication_year: req.body.original_publication_year ,
        original_title: req.body.original_title ,
        title: req.body.title,
        language_code: req.body.language_code ,
        average_rating: req.body.average_rating ,
        ratings_count: req.body.ratings_count ,
        work_ratings_count: req.body.work_ratings_count ,
        work_text_reviews_count: req.body.work_text_reviews_count ,
        image_url: req.body.image_url ,
        small_image_url: req.body.small_image_url
        
    });

    
    // Save Material in the database
    book.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the book."
        });
    });
};

exports.findAll = (req, res) => {
    Book.find()
    .then(books => {
        res.send(books);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving books."
        });
    });
};

exports.findOne = (req, res) => {
    Book.findById(req.params.id)
    .then(books => {
        res.send(books);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving books."
        });
    });
};



exports.findMany = (req, res) => {
    Book.find().limit(+req.params.limit).skip(+req.params.skip)
    .then(books => {
        res.send(books);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving books."
        });
    });
};



exports.delete = (req, res) => {
    Book.findByIdAndRemove(req.params.id)
    .then(books => {
        if(!books) {
            return res.status(404).send({
                message: "books not found with id " + req.params.id
            });
        }
        res.send({message: "books deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "books not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete books with id " + req.params.id
        });
    });
};