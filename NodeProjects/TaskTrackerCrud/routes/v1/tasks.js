const express = require("express");
const tasks = require("../../controllers/tasks");
const validator = require("../../middlewares/validator");

const router = express.Router();

router.post("/addtask", validator.validate, tasks.addtask);
router.get("/", validator.validate, tasks.tasks);
router.put("/edittask/:id", validator.validate, tasks.edittask);
router.get("/gettask/:id", validator.validate, tasks.gettask);
router.delete("/deletetask/:id", validator.validate, tasks.deletetask);

module.exports = router;
