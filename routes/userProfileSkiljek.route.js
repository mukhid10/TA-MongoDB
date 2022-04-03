const express = require('express')
const router = express.Router();
const { getAll, getById, addUserProfile, updateUserProfileById, deleteUserProfileById } = require('../controllers/userProfileSkiljek.controller')

router.get('/', getAll)

router.get("/:id", getById);

router.post("/", addUserProfile);

router.put("/:id", updateUserProfileById);

router.delete("/:id", deleteUserProfileById);

module.exports = router;