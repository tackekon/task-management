const tasksRoute = require("./task.route");

module.exports = (app) => {

  // định nghĩa route http://localhost:3000/api/v1/tasks
  app.use("/api/v1/tasks", tasksRoute);
  
}