const { Router } = require("express");
const getIndexPage = require("../../controllers/home/getIndexPage");
const taskDeleteController = require("../../controllers/home/taskDeleteController");
const addTaskController = require("../../controllers/home/todoController");
const updateStatusController = require("../../controllers/home/updateStatusController");
const updateTaskController = require("../../controllers/home/updateTaskController");
const checkLogin = require("../../middlewares/authentication/checkLogin");
const decorateHmlResponse = require("../../middlewares/common/decorateHtmlResponse");
const indexRouter = Router();

//get index/todo page
indexRouter.get("/", decorateHmlResponse("Home"), checkLogin, getIndexPage);

//index/todo page handler
indexRouter.post(
  "/addNewTask",
  decorateHmlResponse("Home"),
  checkLogin,
  addTaskController
);

//delete task handler
indexRouter.get("/deleteTask/:taskId", checkLogin, taskDeleteController);
// indexRouter.get("/deleteTask/:taskId", checkLogin, taskDeleteController);

//Status update handler
indexRouter.get("/updateStatus/:taskId", checkLogin, updateStatusController);

//update task handler
indexRouter.post("/updateTask", checkLogin, updateTaskController);

module.exports = indexRouter;
