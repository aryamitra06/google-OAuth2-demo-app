const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const userRoute = require("./routes/user");
require("./passportGoogleAuthSetup/passport");
require("dotenv").config();

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["arya"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/api/auth", authRoute);
app.use("/api", postRoute);
app.use("/api", userRoute);

app.listen(process.env.LOCAL_PORT, () => {
  console.log(`Server is running at port ${process.env.LOCAL_PORT}!`);
});
