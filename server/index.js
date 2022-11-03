const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //access req body

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
}); 

//Routes
//home
app.get()
//get all users
app.get()

