const router = require("express").Router();
const passport = require("passport");

const FE_URL = "http://localhost:3000/";

router.get(
  "/google/login",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: FE_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/login/failed", (req, res) => {
  res.status(401).send("<p>Oops, Something went wrong!</p>");
});

router.get("/google/logout", (req, res) => {
  req.logout();
  res.redirect(FE_URL);
});

module.exports = router;
