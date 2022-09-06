const errorHandler = (err, req, res, next) => {
  const error =
    process.env.NODE_ENV == "development" ? err : { message: err.message };

  if (res.headersSent) {
    next();
  } else {
    try {
      res.locals.error = error;
      res.status(error.status || 500);
      if (res.locals.html) {
        // html response
        res.render("pages/errorPage", { title: "Error Page" });
      } else {
        //json response
        res.json(error);
      }
    } catch (error) {
      next(error);
    }
  }
};

module.exports = errorHandler;
