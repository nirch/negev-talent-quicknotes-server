const fs = require("fs");
const { sequelize } = require("../db/models/index.js");
const { nanoid } = require("nanoid");

async function getNotes() {
  const [results] = await sequelize.query("SELECT * FROM notes");
  return results;
}

async function getNoteById(id) {
  const notes = await getNotes();
  const note = notes.find(note => note.id === id);
  return note;
}

async function addNote(newNote) {
  newNote.date = new Date();
  newNote.id = nanoid(7);

  const notes = await getNotes();
  notes.push(newNote);

  await fs.promises.writeFile("./data/notes.json", JSON.stringify(notes));

  return newNote;
}

module.exports = { getNotes, getNoteById, addNote };