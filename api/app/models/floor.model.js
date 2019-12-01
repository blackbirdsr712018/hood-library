const mongoose = require('mongoose');

const FloorSchema = mongoose.Schema({
    id: Number,
    title: String,
    content: String,
    image: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Floor', FloorSchema);