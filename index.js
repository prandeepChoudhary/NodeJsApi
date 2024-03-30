import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello I'm Using Node Express Server With Nodemon");
})

app.get("/about", (req, res) =>{
  res.send("<h1> About Me </h1> <p> My name is prandeep</p> ");
})

app.get("/contact", (req, res) =>{
  res.send("<h1> Contact Me </h1> <p> Phone: 9639821663 </p>");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
