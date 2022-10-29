const express = require("express");
const router = express.Router();
const loginController = require("../controllers/login");
const authController = require('../controllers/auth')

router.get("/", loginController.getLogin);

router.get('/login', authController.getLogin)

router.post('/signup', authController.postSignup)

router.post('/login', authController.postLogin)

module.exports = router;
