const express = require('express');
const controller = require("./../Controller/adminController");
const router = express.Router();

router.route("/admin")
    .get(controller.getAdmin)
    .post(controller.addAdmin)
    .put(controller.updateAdmin)
    .delete(controller.deleteAdmin)

// router.get("/child/:id", controller.getChildById)
module.exports = router;