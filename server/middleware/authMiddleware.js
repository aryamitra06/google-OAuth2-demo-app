function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(200).json({
      isLoggedIn: false,
      message: "User Unauthorized",
    });
  }
}

module.exports = isAuthenticated;
