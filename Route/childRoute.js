const express = require('express');
const controller = require("./../Controller/childController");
const router = express.Router();

router.route("/child")
    .get(controller.getAllChildren)
    .post(controller.createChild)
    .put(controller.updateChild)
    .delete(controller.deleteChild)

router.get("/child/:id", controller.getChildById)

module.exports = router;