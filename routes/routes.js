const express = require("express");
const router = express.Router();

const messages = [
  { id: 0, text: "Hi there!", user: "Amando", added: new Date() },
  { id: 1, text: "Hello World!", user: "Charles", added: new Date() },
];

router.get("/", (req, res) => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/new", text: "New Message" }, // Example link
  ];

  res.render("index", { messages: messages, links: links });
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.get("/message/:id", (req, res) => {
  const messageId = parseInt(req.params.id);
  const message = messages[messageId];
  res.render("message", { message });
});

router.post("/new", (req, res) => {
  const { text, user, id } = req.body;

  const newId = messages.length;

  const newMessage = {
    id: newId, // Assign the calculated ID
    text: text,
    user: user,
    added: new Date(),
  };

  messages.push(newMessage);

  res.redirect("/");
});

module.exports = router;
