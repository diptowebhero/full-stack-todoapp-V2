const Todo = require("../../models/Todo");

const updateTaskController = async (req, res, next) => {
  const { taskName, priority, date, taskId } = req.body;
  //   return console.log(taskName, priority, date, taskId);
  try {
    let taskObj = {
      taskName,
      priority,
      date,
    };
    await Todo.findOneAndUpdate({ _id: taskId }, taskObj);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
};
module.exports = updateTaskController;
