const getSignUpPage = async (req, res, next) => {
  try {
    res.render("pages/auth/signUp", { error: {}, user: {} });
  } catch (error) {
    next(error);
  }
};
module.exports = getSignUpPage;
