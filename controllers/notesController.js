const notesModel = require("../models/notesModel");

async function getNotes(req, res) {
  const notes = await notesModel.getNotes();
  res.status(200).json(notes);
}

async function getNoteById(req, res) {
  const noteId = req.params.id;
  const note = await notesModel.getNoteById(noteId);
  note ?
    res.status(200).json(note) :
    res.status(404).json({ success: false, message: "Note not found" });
}

function addNote(req, res) {
  res.status(201).json({ content: "Hello Create Notes!" });
}

module.exports = { getNotes, getNoteById, addNote }