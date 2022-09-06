const { check } = require("express-validator");
const createHttpError = require("http-errors");
const User = require("../../models/User");
const signupValidator = [
  check("username")
    .isLength({ min: 1 })
    .withMessage("Username must be require!")
    .isAlpha()
    .withMessage("Name must not contain anything other than alphabet!")
    .custom(async (username) => {
      try {
        const validUsername = await User.findOne({ username });
        if (validUsername) {
          return Promise.reject();
        }
        return true;
      } catch (error) {
        throw createHttpError(error);
      }
    })
    .withMessage("Username is already used!")
    .trim(),
  check("email")
    .not()
    .isEmpty()
    .withMessage("Email must be require!")
    .isEmail()
    .withMessage("Email is Invalid")
    .custom(async (email) => {
      try {
        const validEmail = await User.findOne({ email });
        if (validEmail) {
          return Promise.reject();
        }
      } catch (error) {
        throw createHttpError(error);
      }
      return true;
    })
    .withMessage("Email is already used!")
    .normalizeEmail()
    .trim(),
  check("password")
    .not()
    .isEmpty()
    .withMessage("Password must be require!")
    .isStrongPassword()
    .withMessage(
      "Password must be at least 8 character long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol"
    )
    .trim(),
  check("confirmPassword")
    .not()
    .isEmpty()
    .withMessage("Password must be require!")
    .trim()
    .custom(async (confirmPassword, { req }) => {
      try {
        const { password } = req.body;
        if (password !== confirmPassword) {
          throw new Error("Password not match");
        }
      } catch (error) {
        throw createHttpError(error);
      }
      return true;
    }),
];

module.exports = signupValidator;
