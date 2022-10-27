const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");

router.get("/", mainController.getIndex);
router.get("/admin", mainController.getAdmin)

module.exports = router;
