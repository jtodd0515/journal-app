const express = require('express');
const router = express.Router();
const passport = require("passport");
const {
  RegistrationController,
  LoginController,
} = require("../controllers/userController");

// router.get('/current-time', (req, res) => {
//   const unixTime = new Date().getTime();
//   res.json({ time: unixTime });
// });

router.post("/api/user/register", RegistrationController);

router.post("/api/user/login", LoginController);

router.post(
  "/api/user/validate",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.user);
    res.status(200).send("Authorized.");
  }
);

module.exports = router;