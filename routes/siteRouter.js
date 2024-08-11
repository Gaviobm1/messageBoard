const express = require("express");
const router = express.Router();
const db = require("../db/queries");

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

router.get("/", async (req, res, next) => {
  const messages = await db.getAllMessages();
  res.render("index", { messages, links });
});

router.get("/new", (req, res, next) => {
  res.render("form", { links });
});

router.post("/new", async (req, res, next) => {
  await db.addMessage(req.body.username, req.body.text);
  res.redirect("/");
});

router.get("/new/:id", async (req, res, next) => {
  const message = await db.searchMessage(req.params.id);
  res.render("message", { message, links });
});

module.exports = router;
