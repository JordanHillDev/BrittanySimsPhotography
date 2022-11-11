const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const adminController = require("../controllers/admin");
const authController = require("../controllers/auth")
const { ensureAuth } = require("../middleware/auth");

//GET

router.get("/", ensureAuth, adminController.getAdmin)

router.get("/logout", authController.logout);

//POST

router.post("/addImg", ensureAuth, upload.array("file", 12), adminController.addImg)

//PUT

router.put("/addAboutImg/",ensureAuth, upload.single("file"), adminController.addAboutImg)

router.put("/addBio/",ensureAuth, adminController.addBio)

//DELETE

router.delete("/delete/:id", ensureAuth, adminController.deleteImg)


module.exports = router;