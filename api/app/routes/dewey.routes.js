module.exports = (app) => {
    const deweys = require('../controllers/dewey.controller.js');

    // Create a new Note
    app.post('/deweys', deweys.create);

    // Retrieve all Notes
    app.get('/deweys', deweys.findAll);
    //app.get('/materials', "success");

    // Retrieve a single Note with noteId
    app.get('/deweys/:id', deweys.findOne);

    // Update a Note with noteId
    //app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/deweys/:id', deweys.delete);
}
