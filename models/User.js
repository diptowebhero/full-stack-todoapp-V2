const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      trim: true,
      minlength: 1,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
