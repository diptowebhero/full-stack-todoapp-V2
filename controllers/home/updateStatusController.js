const Todo = require("../../models/Todo");

const updateStatusController = async (req, res, next) => {
  try {
    const taskId = req.params.taskId;
    const task = await Todo.findOne({ _id: taskId, user: req.email });
    const status = task.status === "pending" ? "completed" : "pending";

    const result = await Todo.findOneAndUpdate(
      { _id: taskId, user: req.email },
      {
        $set: {
          status: status,
        },
      }
    );
    if (result) {
      return res.redirect("/");
    }
  } catch (error) {
    next(error);
  }
};
module.exports = updateStatusController;
