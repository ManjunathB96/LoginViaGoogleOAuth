const express = require("express");
const passport = require("passport");
const session=require('express-session')
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const passSetup = require("./config/passport-setup");
const authRoutes = require("./routes/auth.route");


// Set the view engine to EJS
app.set('view engine', 'ejs');

// // Define a route for the login page
// app.get('/login', (req, res) => {
//     res.render('login');
//   });

app.use(session({ secret: "thisismysecrctekeyfhrgfgrfrty84fwir767"}))
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
//http://localhost:5000/auth/google
