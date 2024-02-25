const express = require('express');
const controller = require("./../Controller/teacherController");
const router = express.Router();

router.route("/teachers")
    .get(controller.getAllTeachers)
    .post(controller.createTeacher)
    .put(controller.updateTeacher)
    .delete(controller.deleteTeacher)

router.get("/teachers/:id", controller.getTeacherById)
router.get("/teachers/supervisors", controller.getSupervisor)

module.exports = router;