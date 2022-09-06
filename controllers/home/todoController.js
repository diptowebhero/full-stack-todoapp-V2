const Todo = require("../../models/Todo");

const addTaskController = async (req, res, next) => {
  const { taskName, priority, date } = req.body;
  try {
    if (!taskName || !priority || !date) {
      return res.redirect("/");
    }
    const addTask = new Todo({
      taskName,
      priority,
      date,
      status: "pending",
      user: req.email,
    });
    const result = await addTask.save();
    if (result) {
      return res.redirect("/");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = addTaskController;
