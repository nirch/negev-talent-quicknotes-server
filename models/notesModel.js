const fs = require("fs");
const { nanoid } = require("nanoid");

async function getNotes() {
  const data = await fs.promises.readFile("./data/notes.json");
  return JSON.parse(data);
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