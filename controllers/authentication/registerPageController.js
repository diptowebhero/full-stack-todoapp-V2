const User = require("../../models/User");
const hashStr = require("../../utilities/utilities");

const registerPageController = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new User({
      username,
      email,
      password: await hashStr(password),
    });
    await newUser.save();
    res.render("pages/auth/confirmationSignup", { user: {} });
  } catch (error) {
    next(error);
  }
};

module.exports = registerPageController;
