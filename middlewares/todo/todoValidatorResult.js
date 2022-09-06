// const { validationResult } = require("express-validator");

// const todoValidatorResult = async (req, res, next) => {
//   const error = validationResult(req);
//   const mappedError = error.mapped();
//   //   return console.log(mappedError);
//   if (Object.keys(mappedError).length === 0) {
//     next();
//   } else {
//     res.redirect("pages/home/index.ejs", { error: mappedError });
//   }
// };

// module.exports = todoValidatorResult;
