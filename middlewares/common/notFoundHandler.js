const createHttpErrors = require("http-errors");

const notfoundHandler = (req, res, next) => {
  next(createHttpErrors(404, "Your requested page is not found"));
};

module.exports = notfoundHandler;
