const mongoose = require('mongoose');
const BookSchema = mongoose.Schema({
    book_id: Number,
    cat_id: String,
    class_id: String,
    goodreads_book_id: Number,
    best_book_id: Number,
    work_id: Number,
    books_count: Number,
    isbn: String,
    isbn13: String,
    authors: String,
    original_publication_year: Number,
    original_title: String,
    title: String,
    language_code: String,
    average_rating: Number,
    ratings_count: Number,
    work_ratings_count: Number,
    work_text_reviews_count: Number,
    image_url: String,
    small_image_url: String
})
module.exports = mongoose.model("Book", BookSchema);