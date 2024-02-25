const express = require('express');
const controller = require("./../Controller/authController");
const router = express.Router();

router.route("/signup")
    .post(controller.signup)

router.route("/login")
    .post(controller.login)

router.route("/changePassword")
    .post(controller.changePassword)
    
module.exports = router;