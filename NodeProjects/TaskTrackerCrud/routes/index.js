const tasks = require("./v1/tasks");

module.exports = (app) => {
  app.use("/v1/tasks", tasks);
};
