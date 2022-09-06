const Todo = require("../../models/Todo");

const taskDeleteController = async (req, res, next) => {
  try {
    const taskId = req.params.taskId;
    const result = await Todo.findOneAndDelete({
      _id: taskId,
      user: req.email,
    });
    if (result) {
      return res.redirect("/");
    }
  } catch (error) {
    next(error);
  }
};
module.exports = taskDeleteController;
