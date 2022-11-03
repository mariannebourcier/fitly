const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //access req body

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
}); 

//Routes
//home
app.get('/', (req, res) => {
  res.send('Hello world!');
});

//get all users
//app.get()

