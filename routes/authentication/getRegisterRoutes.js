const { Router } = require("express");
const getRegisterPage = require("../../controllers/authentication/getRegisterPage");
const registerPageController = require("../../controllers/authentication/registerPageController");
const checkLogin = require("../../middlewares/authentication/checkLogin");
const registerValidator = require("../../middlewares/authentication/registerValidator");
const registerValidatorResult = require("../../middlewares/authentication/registerValidatorResult");
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
  registerValidator,
  registerValidatorResult,
  registerPageController
);
module.exports = registerRoutes;
