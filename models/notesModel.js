const { sequelize } = require("../db/models/index.js");

async function getNotes() {
  const [results] = await sequelize.query("SELECT * FROM notes");
  return results;
}

async function getNoteById(id) {
  const query = `
  SELECT *
  FROM notes
  WHERE id=:id
  `;

  const [results] = await sequelize.query(query, { replacements: { id } });

  return results[0];
}

async function addNote(newNote) {
  const query = `
  INSERT INTO notes (title, text, date)
  VALUES (:title, :text, NOW())
  RETURNING id
  `

  const [createdId] = await sequelize.query(query, {
    replacements: {
      title: newNote.title,
      text: newNote.text
    }
  });

  return await getNoteById(createdId[0].id);
}

module.exports = { getNotes, getNoteById, addNote };