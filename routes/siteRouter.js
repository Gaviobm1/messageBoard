const express = require("express");
const router = express.Router();

const num = 0;

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: 1,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: 2,
  },
];

const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/new",
    text: "New Message",
  },
];

router.get("/", (req, res, next) => {
  res.render("index", { messages, links });
});

router.get("/new", (req, res, next) => {
  res.render("form", { links });
});

router.post("/new", (req, res, next) => {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
    id: messages.length + 1,
  });
  res.redirect("/");
});

router.get("/new/:id", (req, res, next) => {
  res.render("message", { message: messages[req.params.id - 1], links });
});

module.exports = router;
