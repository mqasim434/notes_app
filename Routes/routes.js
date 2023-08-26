const express = require('express');
const router = express.Router();

const Notes_Controller = require('../Controller/notes_controller');

router.get('/getNotes',Notes_Controller.getAllNotes);

router.post('/saveNote',Notes_Controller.saveNote);

router.patch('/updateNote/:id',Notes_Controller.updateNote);

router.delete('/deleteNote/:id',Notes_Controller.deleteNote);


module.exports = router;