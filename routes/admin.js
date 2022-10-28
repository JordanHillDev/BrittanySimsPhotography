const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const adminController = require("../controllers/admin");

router.get("/", adminController.getAdmin)

router.post("/addImg", upload.single("file"), adminController.addImg)

router.delete("/delete/:id", adminController.deleteImg)

module.exports = router;