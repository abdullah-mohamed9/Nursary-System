const express = require('express');
const controller = require("./../Controller/adminController");
const router = express.Router();

router.route("/admin")
    .get(controller.getAdmin)
    .post(controller.addAdmin)
    .put(controller.updateAdmin)
    .delete(controller.deleteAdmin)

router.get("/admin/teachers", controller.getAllTeachers);
router.post("/admin/teachers", controller.addTeacher);
router.patch("/admin/teachers/:id", controller.updateTeacher);
router.delete("/admin/teachers/:id", controller.deleteTeacher);
router.get("/admin/teachers/:id", controller.getTeacherById);
router.get("/admin/children", controller.getAllChildren);
router.post("/admin/children", controller.addChild);

module.exports = router;