module.exports = (app) => {
    const books = require('../controllers/book.controller.js');

    // Create a new Note
    app.post('/books', books.create);

    // Retrieve all Notes
    app.get('/books', books.findAll);
    //app.get('/materials', "success");

    // Retrieve a single Note with noteId
    app.get('/books/:id', books.findOne);
    app.get('/books/:limit/:skip', books.findMany);

    // Update a Note with noteId
    //app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/books/:id', books.delete);
}
