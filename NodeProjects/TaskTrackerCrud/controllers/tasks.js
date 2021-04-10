const asyncHandler = require("../middlewares/async");
const Tasks = require("../models/tasks");

exports.tasks = asyncHandler(async (req, res, next) => {
  Tasks.find({})
    .then((Tasks) => {
      res.status(200).json({ status: true, data: Tasks });
    })
    .catch((err) =>
      res
        .status(400)
        .json({ status: false, message: "Error in fetching from DB" })
    );
});

exports.addtask = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  Tasks.insertMany(req.body)
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

exports.deletetask = asyncHandler(async (req, res, next) => {
  Tasks.findByIdAndDelete(req.params.id)
    .then((Tasks) => {
      res.status(200).json({ status: true, data: Tasks });
    })
    .catch((err) =>
      res
        .status(400)
        .json({ status: false, message: "Error in fetching from DB" })
    );
});

exports.edittask = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  Tasks.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
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

exports.gettask = asyncHandler(async (req, res, next) => {
  Tasks.findById(req.params.id)
    .then((Tasks) => {
      res.status(200).json({ status: true, data: Tasks });
    })
    .catch((err) =>
      res
        .status(400)
        .json({ status: false, message: "Error in fetching from DB" })
    );
});
