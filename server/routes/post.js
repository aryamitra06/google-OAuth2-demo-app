const router = require("express").Router();
const isAuthenticated = require("../middleware/authMiddleware");
const jsonData = require("../posts.json");

router.get("/posts", isAuthenticated, (req, res) => {
  try {
    return res.status(200).send(jsonData);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

module.exports = router;
