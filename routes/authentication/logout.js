const { Router } = require("express");
const logoutController = require("../../controllers/authentication/logoutController");
const logoutRoute = Router();

logoutRoute.get("/", logoutController);

module.exports = logoutRoute;
