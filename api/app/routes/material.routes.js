module.exports = (app) => {
    const materials = require('../controllers/material.controller.js');

    // Create a new Note
    app.post('/materials', materials.create);

    // Retrieve all Notes
    app.get('/materials', materials.findAll);
    //app.get('/materials', "success");

    // Retrieve a single Note with noteId
    //app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    //app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    //app.delete('/notes/:noteId', notes.delete);
}
