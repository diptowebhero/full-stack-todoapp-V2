const jwt = require("jsonwebtoken");

const loginPageController = async (req, res, next) => {
  const { email } = req.body;
  try {
    if (req.validUser) {
      const token = await jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      res.cookie("access_token", "Bearer " + token, {
        signed: true,
        httpOnly: true,
        secure: true,
      });
      res.locals.loggedInUser = email;
      res.redirect("/");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = loginPageController;
