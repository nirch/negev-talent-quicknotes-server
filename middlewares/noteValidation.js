const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const { noteSchema } = require('../data/noteSchema');

const ajv = new Ajv();
addFormats(ajv);
const validateNote = ajv.compile(noteSchema);

function noteValidation(req, res, next) {
  const note = req.body;
  const valid = validateNote(note);
  if (valid) {
    next();
  } else {
    const error = new Error("Note Validation Error");
    error.status = 400;
    error.message = validateNote.errors[0].message;
    next(error);
  }
}

module.exports = { noteValidation }