const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact");

router.get("/", contactController.getContact);

router.post("/send", contactController.sendMessage)

module.exports = router