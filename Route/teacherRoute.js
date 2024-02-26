const express = require('express');
const controller = require("./../Controller/teacherController");
const upload = require('./../Middlewares/multerMW');
const router = express.Router();
const validation = require("../Middlewares/validation/teacherValidator");

router.route("/teachers")
    .get(controller.getAllTeachers)
    .post(upload.single("image"), validation.createTeacherValid, validation.validMSG, controller.createTeacher)
    .put(upload.single("image"), validation.updateTeacherValid, validation.validMSG, controller.updateTeacher)
    .delete(validation.deleteTeacherValid, validation.validMSG, controller.deleteTeacher)

router.get("/teachers/:id", validation.getTeacherByIdValid, validation.validMSG, controller.getTeacherById)
router.get("/teachers/supervisors", controller.getSupervisors)

module.exports = router;