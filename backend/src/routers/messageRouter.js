// messageRouter.js
const express = require("express");
const message = express.Router();
const messageController = require("../controllers/messageController");
const rescue = require("express-rescue");
const auth = require("../middlewares/auth");

message.put("/:id", rescue(auth), rescue(messageController.updateMessage));

module.exports = message;
