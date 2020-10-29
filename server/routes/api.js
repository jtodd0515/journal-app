const express = require('express');
const router = express.Router();
const passport = require("passport");
const {
  RegistrationController,
  LoginController,
  entryController
} = require("../controllers");


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

router.post("/newentry", entryController);


module.exports = router;