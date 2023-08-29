const users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");

const getUsers = (req, res) => {
  res.status(200).json({ users });
};

const createUSer = (req, res) => {
  const newUSer = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUSer);
  res.status(201).json({
    users,
  });
};
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  users
    .filter((user) => user.id === userId)
    .map((selectedUSer) => {
      selectedUSer.name = name;
      selectedUSer.email = email;
    });
  res.status(200).json(users);
};
const deleteUser = (req, res) => {
  const userId = req.params.id;
  const selectedUser = users.filter((user) => user.id === userId);
  users.pop(selectedUser);
  res.status(200).json(users);
};

module.exports = { getUsers, createUSer, updateUser, deleteUser };
