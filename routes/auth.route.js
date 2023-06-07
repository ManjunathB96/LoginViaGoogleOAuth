// const express = require('express');
// const router=express.Router()
const router = require("express").Router();
const passport = require("passport");

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

router.get("/",(req, res) => {
    res.send('<a href="/auth/google">Login </a>');
  });

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: true,
    // successRedirect: "/login",
    // failureRedirect: "/failure",
  }),
  (req, res) => {
    // Redirect or return the JWT token to the client   res.json({ token: req.user });
    console.log("user email id ==========",req.user._json.email);
    res.json(req.user._json);
    
  }
);

// Define a route for the login page
router.get("/login",(req, res) => {
  res.send(req.user);
});

// Define a route for the login page
router.get("/failure", (req, res) => {
  res.send("something went wrong......");
});

module.exports = router;
