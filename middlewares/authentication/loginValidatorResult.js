const { validationResult } = require("express-validator");

const loginValidationResult = (req, res, next) => {
  const error = validationResult(req);
  const mappedError = error.mapped();
  const user = req.body;
  //   return console.log(mappedError);
  if (Object.keys(mappedError).length === 0) {
    next();
  } else {
    res.render("pages/auth/login", { error: mappedError, user });
  }
};

module.exports = loginValidationResult;
