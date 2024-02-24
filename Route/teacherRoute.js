const express = require('express');
const controller = require("./../Controller/teacherController");
const router = express.Router();

router.route("/teacher")
    .get(controller.getAllTeachers)
    .post(controller.createTeacher)
    .put(controller.updateTeacher)
    .delete(controller.deleteTeacher)

router.get("/teacher/supervisors", controller.getSupervisors)
module.exports = router;