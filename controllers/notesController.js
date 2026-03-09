const { sequelize } = require("../db/models");
const notesModel = require("../models/notesModel");
const { Note } = sequelize.models;

async function getNotes(req, res) {
  const notes = await notesModel.getNotes();
  res.status(200).json(notes);
}

async function getNotesORM(req, res) {
  const notes = await Note.findAll();
  res.status(200).json(notes);
}


async function getNoteById(req, res) {
  const noteId = req.params.id;
  const note = await notesModel.getNoteById(noteId);

  if (!note) {
    throw { ...new Error(), status: 404, message: "Note not found" };
  }

  res.status(200).json(note)
}


async function addNote(req, res) {
  const noteDraft = req.body;
  const newNote = await notesModel.addNote(noteDraft);
  res.status(201).json(newNote);
}

module.exports = { getNotes, getNoteById, addNote, getNotesORM }