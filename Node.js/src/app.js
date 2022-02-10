const hbs = require("hbs");
const express = require("express");
const path = require("path");
const user = require('../src/models/registers');
const auth = require('../routes/auth');

const app = express();
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname,"../public/css");
const views_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

require("./db/conn");
const Register = require("./models/registers");
const { json } = require("express");
const { cp } = require("fs");
const { checkServerIdentity } = require("tls");
const { STATES } = require("mongoose");

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",views_path);
hbs.registerPartials(partials_path)

app.use(express.json());
app.use(express.urlencoded({
  extended:false
}));
app.use("/register",auth);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.listen(port, () => {
  console.log(`Connection Sucessfull at port ${port}`);
});