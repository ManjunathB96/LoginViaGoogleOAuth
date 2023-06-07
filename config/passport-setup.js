const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const dotenv=require('dotenv')
dotenv.config();

const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: `http://localhost:${PORT}/auth/google/callback`,
    },
    (accessToken, refreshToken, profile, done) => {
      // Handle user authentication and create a JWT token
      // const token = jwt.sign({ userId: profile.id }, JWT_SECRET);
      // done(null, token);
      done(null, profile);
    }
  )
);


passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });