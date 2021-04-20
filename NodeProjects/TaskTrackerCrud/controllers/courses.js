const asyncHandler = require("../middlewares/async");
const Courses = require("../models/courses");

exports.add = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  res.status(200).json({ msg: "yo" });
});

exports.courses = asyncHandler(async (req, res, next) => {
  Courses.find({})
    .then((courses) => {
      res.status(200).json({ status: true, data: courses });
    })
    .catch((err) =>
      res
        .status(400)
        .json({ status: false, message: "Error in fetching from DB" })
    );
});

exports.addcourse = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  Courses.insertMany(req.body)
    .then(() =>
      res
        .status(200)
        .json({ status: true, message: "The insertion was successful" })
    )
    .catch((err) =>
      res.status(400).json({
        status: false,
        message: `Could not insert the course. Request failed ! Error : ${err}`,
      })
    );
});

exports.editcourse = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  Courses.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then((user) => {
      res.status(200).json({ user, message: "Success" });
    })
    .catch((err) =>
      res.status(400).json({
        status: false,
        message: `CourseId ${String(
          req.params.id
        )} could not be inserted, Err ${err}`,
      })
    );
});

exports.getcourse = asyncHandler(async (req, res, next) => {
  Courses.findById(req.params.id)
    .then((courses) => {
      res.status(200).json({ status: true, data: courses });
    })
    .catch((err) =>
      res
        .status(400)
        .json({ status: false, message: "Error in fetching from DB" })
    );
});

exports.deletecourse = asyncHandler(async (req, res, next) => {
  Courses.findByIdAndDelete(req.params.id)
    .then((courses) => {
      res.status(200).json({ status: true, data: courses });
    })
    .catch((err) =>
      res
        .status(400)
        .json({ status: false, message: "Error in fetching from DB" })
    );
});
