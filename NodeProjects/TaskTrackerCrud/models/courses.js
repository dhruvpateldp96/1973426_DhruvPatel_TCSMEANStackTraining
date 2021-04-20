const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoursesSchema = new Schema({
  id: String,
  title: String,
  description: String,
  amount: Number,
});

module.exports = mongoose.model("Courses", CoursesSchema);
