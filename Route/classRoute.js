const express = require('express');
const controller = require("./../Controller/classController");
const router = express.Router();
const validation = require("../Middlewares/validation/classValidator");

router.route("/class")
    .get(controller.getAllClasses)
    .post(validation.createClassValid, validation.validMSG, controller.createClass)
    .put(validation.updateClassValid, validation.validMSG, controller.updateClass)
    .delete(validation.deleteClassValid, validation.validMSG, controller.deleteClass)

router.get("/class/:id", validation.getClassByIdValid, validation.validMSG, controller.getClassById)

router.get("/class/child/:id", controller.getChild)
router.get("/class/teacher/:id", controller.getSupervisor)

module.exports = router;