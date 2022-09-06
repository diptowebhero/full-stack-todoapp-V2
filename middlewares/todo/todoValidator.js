const { check } = require("express-validator");

const todoValidator = [
  check("taskName")
    .not()
    .isEmpty()
    .withMessage("Task Name Require")
    .isLength({ min: 2, max: 50 })
    .withMessage("Task Name must contain 2 to character"),
  check("priority").not().isEmpty().withMessage("Priority is Require"),
  check("date").not().isEmpty().withMessage("Priority is Require"),
];
module.exports = todoValidator;
