const {v4: uuidv4} = require("uuid");

const users = [
  {
    id: uuidv4(),
    name: "Ashique",
    email: "test@gmail.com",
  },
  {
    id: uuidv4(),
    name: "Riko",
    email: "test1@gmail.com",
  },
];

module.exports=users