const { Router } = require("express");
const getSignUpPage = require("../../controllers/authentication/getSignUpPage");
const signupPageController = require("../../controllers/authentication/signupPageController");
const checkLogin = require("../../middlewares/authentication/checkLogin");
const signupValidator = require("../../middlewares/authentication/signupValidator");
const signupValidatorResult = require("../../middlewares/authentication/signupValidatorResult");
const decorateHmlResponse = require("../../middlewares/common/decorateHtmlResponse");
const singUpRoutes = Router();

// get signup page
singUpRoutes.get("/", decorateHmlResponse("SignUp"), checkLogin, getSignUpPage);

//sign up page handler
singUpRoutes.post(
  "/",
  decorateHmlResponse("SignUp"),
  signupValidator,
  signupValidatorResult,
  signupPageController
);
module.exports = singUpRoutes;
