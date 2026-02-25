const express = require("express");
const { getNotes, getNoteById, addNote } = require("../controllers/notesController");
const { noteValidation } = require("../middlewares/noteValidation");
const router = express.Router();


router.get("/", getNotes);              // GET /notes/
router.get("/:id", getNoteById);        // GET /notes/:id
router.post("/", noteValidation, addNote);              // POST /notes

module.exports = router;