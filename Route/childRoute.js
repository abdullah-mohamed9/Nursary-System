const express = require('express');
const router = express.Router();
const controller = require("./../Controller/childController");
const validation = require("../Middlewares/validation/childValidator");

router.route("/child")
    .get(controller.getAllChildren)
    .post(validation.createChildValid, validation.validMSG, controller.createChild)
    .put(validation.updateChildValid, validation.validMSG, controller.updateChild)
    .delete(validation.deleteChildValid, validation.validMSG, controller.deleteChild)

router.get("/child/:id", validation.getChildByIdValid, validation.validMSG, controller.getChildById)

module.exports = router;