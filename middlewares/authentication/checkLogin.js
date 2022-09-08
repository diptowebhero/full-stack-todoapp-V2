const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../../models/User");
dotenv.config();
const checkLogin = async (req, res, next) => {
  try {
    if (req.signedCookies.access_token) {
      const token = req.signedCookies.access_token.split(" ")[1];
      const decode = await jwt.verify(token, process.env.JWT_SECRET);
      // return console.log(decode);
      req.email = decode.email;
      const user = await User.findOne(req.body.email);
      if (user) {
        if (req.originalUrl === "/login" || req.originalUrl === "/register") {
          return res.redirect("/");
        }
      }
      next();
    } else {
      if (req.originalUrl === "/register") {
        return res.render("pages/auth/register", { error: {}, user: {} });
      }
      res.render("pages/auth/login", { error: {}, user: {} });
    }
  } catch (error) {
    if (error.message === "jwt expired") {
      if (req.originalUrl === "/register") {
        return res.render("pages/auth/register", { error: {}, user: {} });
      }
      res.render("pages/auth/login", { error: {}, user: {} });
    }
    next(error);
  }
};
module.exports = checkLogin;
