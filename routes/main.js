const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");

router.get("/", mainController.getRealEstate);
router.get("/concert", mainController.getConcert);
router.get("/lifestyle", mainController.getLifestyle);
router.get("/realestate", mainController.getRealEstate);
router.get("/about", mainController.getAbout);


module.exports = router;
