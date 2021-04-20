const express = require("express");
const courses = require("../../controllers/courses");
const validator = require("../../middlewares/validator");

const router = express.Router();

router.post("/addcourse", validator.validate, courses.addcourse);
router.get("/", validator.validate, courses.courses);
router.put("/editcourse/:id", validator.validate, courses.editcourse);
router.get("/getcourse/:id", validator.validate, courses.getcourse);
router.delete("/deletecourse/:id", validator.validate, courses.deletecourse);

module.exports = router;
