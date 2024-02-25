const express = require('express');
const controller = require("./../Controller/classController");
const router = express.Router();

router.route("/class")
    .get(controller.getAllClasses)
    .post(controller.createClass)
    .put(controller.updateClass)
    .delete(controller.deleteClass)

router.get("/class/:id",controller.getClassById)

router.get("/class/child/:id",controller.getChild)
router.get("/class/teacher/:id",controller.getSupervisor)

module.exports = router;