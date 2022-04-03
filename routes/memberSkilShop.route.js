const express = require('express')
const router = express.Router();
const { getAll, getById, addMember, updateMemberById, deleteMemberById } = require('../controllers/memberSkilShop.controllers')

router.get('/', getAll)

router.get("/:id", getById);

router.post("/", addMember);

router.put("/:id", updateMemberById);

router.delete("/:id", deleteMemberById);

module.exports = router;