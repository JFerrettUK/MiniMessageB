// app.js
const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const aboutRouter = require("./routes/aboutRouter");
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links = [
  { href: "/", text: "Home" },
  { href: "authors", text: "Authors" },

  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.use(express.static(assetsPath));

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.get("/about", (req, res) => {
  res.render("about", { links });
});

app.use("/about", aboutRouter);
app.use("/authors", authorRouter);
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
