const express = require("express");
const { getUsers, createUSer, updateUser, deleteUser } = require("../controllers/users.controller");


const router =express.Router()

router.get("/", getUsers);
router.post("/", createUSer);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports =router