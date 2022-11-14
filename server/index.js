const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //access req body

//Routes
//home
app.get('/', (req, res) => {
  res.send('Hello world!');
});
//login post
app.post('/login', (req, res) => {
const { email, password } = req.body;
})
//logout post
app.post('/logout', (req, res) => {

})
//profile 
app.get('/profile/:id', (req, res) => {

})
//signup
app.post('/register', (req, res) => {

})




app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
}); 