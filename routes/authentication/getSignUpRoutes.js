const { Router } = require("express");
const getRegisterPage = require("../../controllers/authentication/getSignUpPage");
const getSignUpPage = require("../../controllers/authentication/getSignUpPage");
const signupPageController = require("../../controllers/authentication/signupPageController");
const checkLogin = require("../../middlewares/authentication/checkLogin");
const signupValidator = require("../../middlewares/authentication/signupValidator");
const signupValidatorResult = require("../../middlewares/authentication/signupValidatorResult");
const decorateHmlResponse = require("../../middlewares/common/decorateHtmlResponse");
const registerRoutes = Router();

// get signup page
registerRoutes.get(
  "/",
  decorateHmlResponse("SignUp"),
  checkLogin,
  getRegisterPage
);

//sign up page handler
registerRoutes.post(
  "/",
  decorateHmlResponse("SignUp"),
  signupValidator,
  signupValidatorResult,
  signupPageController
);
module.exports = registerRoutes;
