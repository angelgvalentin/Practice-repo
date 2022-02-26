const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const todosController = require("./controllers/todos.js");

app.use(cors());

app.use(express.json());
app.use("/todos", todosController);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

mongoose.connect("mongodb://localhost:27017/APIpracticecrud");
mongoose.connection.once("open", () => {
  console.log("connected to mongod...");
});
