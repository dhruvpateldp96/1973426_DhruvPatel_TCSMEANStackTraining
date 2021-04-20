const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  emp_id: String,
  task_id: String,
  description: String,
  deadline: String,
  key: String,
});

module.exports = mongoose.model("Task", TaskSchema);
