const Todo = require("../../models/Todo");
const User = require("../../models/User");

const getIndexPage = async (req, res, next) => {
  console.log("hello");
  try {
    const todos = await Todo.find({ user: req.email });
    const user = await User.findOne({ user: req.email });
    // return console.log(user);
    res.render("pages/home/index", { todos, user });
  } catch (error) {
    next(error);
  }
};
module.exports = getIndexPage;
