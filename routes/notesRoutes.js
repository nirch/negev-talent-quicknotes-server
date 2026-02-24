const express = require("express");
const { getNotes, getNoteById, addNote } = require("../controllers/notesController");
const router = express.Router();


router.get("/", getNotes);
router.get("/:id", getNoteById);
router.post("/", addNote);

module.exports = router;