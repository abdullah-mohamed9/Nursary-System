const express = require('express');
const controller = require("./../Controller/teacherController");
const upload = require('./../Middlewares/multerMW');
const router = express.Router();

router.route("/teachers")
    .get(controller.getAllTeachers)
    .post(upload.single("image") ,controller.createTeacher)
    .put(upload.single("image") ,controller.updateTeacher)
    .delete(controller.deleteTeacher)

router.get("/teachers/:id", controller.getTeacherById)
router.get("/teachers/supervisors", controller.getSupervisors)

module.exports = router;