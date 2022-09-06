const { Router } = require("express");
const getLoginPage = require("../../controllers/authentication/getLoginPage");
const loginPageController = require("../../controllers/authentication/loginPageController");
const checkLogin = require("../../middlewares/authentication/checkLogin");
const loginValidator = require("../../middlewares/authentication/loginValidator");
const loginValidationResult = require("../../middlewares/authentication/loginValidatorResult");
const decorateHmlResponse = require("../../middlewares/common/decorateHtmlResponse");
const loginRoute = Router();

// get login page
loginRoute.get("/", decorateHmlResponse("Login"), checkLogin, getLoginPage);

//login page handler
loginRoute.post(
  "/",
  decorateHmlResponse("Login"),
  loginValidator,
  loginValidationResult,
  loginPageController
);

module.exports = loginRoute;
