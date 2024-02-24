const express = require('express');
const controller = require("./../Controller/childController");
const router = express.Router();

router.route("/child")
    .get(controller.getAllChildren)
    .post(controller.createChildren)
    .put(controller.updateChildren)
    .delete(controller.deleteChildren)

router.get("/child/:id", controller.getChildById)

module.exports = router;