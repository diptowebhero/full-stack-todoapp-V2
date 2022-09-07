const getSignUpPage = async (req, res, next) => {
  try {
    return res.render("pages/auth/signUp", { error: {}, user: {} });
  } catch (error) {
    next(error);
  }
};
module.exports = getSignUpPage;
