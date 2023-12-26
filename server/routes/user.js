const router = require("express").Router();
const isAuthenticated = require("../middleware/authMiddleware");

router.get("/user", isAuthenticated, (req, res) => {
  try {
    res.status(200).json({
      isLoggedIn: true,
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
