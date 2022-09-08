const { validationResult } = require("express-validator");
const registerValidatorResult = (req, res, next) => {
  const error = validationResult(req);
  const mappedError = error.mapped();
  const user = req.body;
  // return console.log(user);
  // return console.log(mappedError);
  if (Object.keys(mappedError).length === 0) {
    next();
  } else {
    res.render("pages/auth/register", { error: mappedError, user });
  }
};

module.exports = registerValidatorResult;
