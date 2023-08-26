const express = require("express");
const Note = require("../Models/note");

const Notes_Controller = {
  async saveNote(req, res) {
    const { title, description } = req.body;
    const newNote = new Note({ title, description });

    try {
      await newNote.save();
      res.json(newNote);
    } catch (e) {
      res.json(e);
    }
  },

  async getAllNotes(req, res) {
    try {
      const notes = await Note.find();
      res.json(notes);
    } catch (e) {
      res.status(500).json({ error: "Unable to retrieve notes", details: e });
    }
  },

  async updateNote(req,res){
    const id = req.params.id;

    try {
        // Find the user by CNIC
        const note = await Note.findOne({ _id:id });
  
        if (!note) {
          return res.status(404).json({ message: "Note not found" });
        }else{
          const updatedNote = await Note.findOneAndUpdate(
            {_id:id},
            req.body,
            {new:true}
            );
          return res.json({
            message: "Note updated successfully ",
            // user: updatedUser,
          });
        }
  
      } catch (error) {
        console.error("Error updating user:", error.message);
        return res.status(500).json({ message: "Error updating user" });
      }
    
  },

  async deleteNote(req, res) {
    const noteId = req.params.id;
    try {
      const deletedNote = await Note.findByIdAndRemove(noteId);

      if (!deletedNote) {
        res.status(404).json({ error: "Note not found" });
      } else {
        res.json(deletedNote);
      }
    } catch (e) {
      res.status(500).json({ error: "Unable to delete note", details: e });
    }
  },
};

module.exports = Notes_Controller;
