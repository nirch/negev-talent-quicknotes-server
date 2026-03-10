const express = require("express");
const { getNotes, getNoteById, addNote, getNotesORM } = require("../controllers/notesController");
const { noteValidation } = require("../middlewares/noteValidation");
const { authenticate } = require("../middlewares/authenticate");
const router = express.Router();


router.get("/", authenticate, getNotes);                              // GET /notes/
router.get("/orm", getNotesORM);                                      // GET /notes/orm
router.get("/:id", getNoteById);                                      // GET /notes/:id
router.post("/", authenticate, noteValidation, addNote);              // POST /notes

module.exports = router;