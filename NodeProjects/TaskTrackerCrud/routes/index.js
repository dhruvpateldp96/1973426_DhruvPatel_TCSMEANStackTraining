const tasks = require("./v1/tasks");
const courses = require("./v1/courses");

module.exports = (app) => {
  app.use("/v1/tasks", tasks);
  app.use("/v1/courses", courses);
};
