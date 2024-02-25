const express = require('express');
const router = express.Router();
const controller = require("./../Controller/childController");

router.route("/child")
    .get(controller.getAllChildren)
    .post(controller.createChild)
    .put(controller.updateChild)
    .delete(controller.deleteChild)

router.get("/child/:id", controller.getChildById)

module.exports = router;