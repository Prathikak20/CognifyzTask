const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let storedData = [];

app.get("/form2", (req, res) => {
  res.render("form2", { error: null });
});

app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email.includes("@")) {
    return res.render("form2", { error: "Server validation failed. Name and email required." });
  }
  storedData.push({ name, email });
  res.render("success", { name });
});

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000/form2");
});
