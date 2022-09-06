const logoutController = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.redirect("/login");
  } catch (error) {
    next(error);
  }
};

module.exports = logoutController;
