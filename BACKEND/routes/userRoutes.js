const express = require("express");
const router = express.Router();
var _ = require('lodash');
const { User, validate } = require("../models/userModel");

// Home page route.
router.post("/", async function (req, res) {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //
  if (!req.body.password) return res.status(400).send("Password is required..");

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered..");

  user = new User(_.pick(req.body, ["name", "email", "password"]));
  await user.save();
  res.send(_.pick(user, ["_id", "name", "email"]));
  
});

module.exports = router;


// About page route.
router.get("/about", function (req, res) {
  res.send("About cars page");
});

module.exports = router;

