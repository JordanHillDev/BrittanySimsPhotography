const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const adminController = require("../controllers/admin");
const authController = require("../controllers/auth")
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, adminController.getAdmin)

router.get("/logout", authController.logout);

router.post("/addImg", ensureAuth, upload.array("file", 12), adminController.addImg)

router.delete("/delete/:id", ensureAuth, adminController.deleteImg)

module.exports = router;