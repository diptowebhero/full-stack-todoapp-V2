//dependencies
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const notfoundHandler = require("./middlewares/common/notFoundHandler");
const errorHandler = require("./middlewares/common/errorHandler");
const loginRoute = require("./routes/authentication/getLoginRoutes");
const singUpRoutes = require("./routes/authentication/getSignUpRoutes");
const indexRouter = require("./routes/home/getIndexRoute");
const logoutRoute = require("./routes/authentication/logout");

const app = express();
dotenv.config();

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//parse cookie
app.use(cookieParser(process.env.COOKIE_SECRET));

//set view engin
app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname + "public")));

//routing setup
app.use("/", indexRouter);
app.use("/login", loginRoute);
app.use("/signup", singUpRoutes);
app.use("/logout", logoutRoute);

//not found handler
app.use(notfoundHandler);

//default error handler
app.use(errorHandler);

//database connection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Database connected successfully");
    });
  })
  .catch((error) => {
    console.log(error);
  });
