const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");

router.get("/", mainController.getIndex);
router.get("/concert", mainController.getIndex);
router.get("/lifestyle", mainController.getLifestyle);
router.get("/realestate", mainController.getRealEstate);
router.get("/about", mainController.getAbout);


module.exports = router;
