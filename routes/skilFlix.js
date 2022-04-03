const express = require('express')
const router = express.Router();
const { getAll, getById, addSkilFlix, updateSkilFlixById, deleteSKilFlixById  } = require('../controllers/skilFlix.controller')

router.get('/', getAll)

router.get("/:id", getById);

router.post("/", addSkilFlix);

router.put("/:id", updateSkilFlixById);

router.delete("/:id", deleteSKilFlixById);

module.exports = router;