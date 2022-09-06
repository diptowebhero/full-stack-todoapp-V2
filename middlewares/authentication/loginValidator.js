const { check } = require("express-validator");
const createHttpError = require("http-errors");
const User = require("../../models/User");
const bcrypt = require("bcrypt");

const loginValidator = [
  check("email")
    .not()
    .isEmpty()
    .withMessage("Email is require")
    .isEmail()
    .withMessage("Email is invalid")
    .custom(async (email) => {
      const validEmail = await User.findOne({ email });
      if (!validEmail) {
        return Promise.reject();
      }
      return true;
    })
    .withMessage("Email is not found"),

  check("password")
    .not()
    .isEmpty()
    .withMessage("Password is require")
    .custom(async (password, { req }) => {
      try {
        const { email } = req.body;
        const isValidUser = await User.findOne({ email });
        const isValidPass = await bcrypt.compare(
          password,
          isValidUser.password
        );
        if (isValidPass) {
          req.validUser = true;
          return Promise.resolve();
        } else {
          return Promise.reject();
        }
      } catch (error) {
        throw createHttpError(error);
      }
    })
    .withMessage("Wrong Password! Provide a valid password"),
];

module.exports = loginValidator;
