const express = require('express');
const router = express.Router();
const passport = require("passport");
const {
  RegistrationController,
  LoginController,
} = require("../controllers/userController");


router.post("/user/register", RegistrationController);

router.post("/user/login", LoginController);

router.post(
  "/user/validate",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.user);
    res.status(200).send("Authorized.");
  }
);

module.exports = router;