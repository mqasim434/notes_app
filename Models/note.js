// noteModel.js
const mongoose = require('mongoose');

// Define the schema for the note
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

// Create the Mongoose model for the note
const Note = mongoose.model('Note', noteSchema,"notes");

module.exports = Note;
