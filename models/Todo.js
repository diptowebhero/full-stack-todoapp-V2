const { Schema, model } = require("mongoose");

const todoSchema = new Schema(
  {
    taskName: {
      type: String,
      require: true,
      trim: true,
    },
    priority: {
      type: String,
      require: true,
      trim: true,
    },
    date: {
      type: Date,
      require: true,
      trim: true,
    },
    status: {
      type: String,
      require: true,
      trim: true,
    },
    user: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Todo = model("Todo", todoSchema);

module.exports = Todo;
