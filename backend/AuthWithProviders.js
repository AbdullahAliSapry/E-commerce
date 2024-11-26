const GoogleStrategy = require("passport-google-oauth20").Strategy;

const passport = require("passport");

const callBackGoogle = "http://localhost:5000/api/v1/auth/google/callback";
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: callBackGoogle,
    },
    // run when google response is available
    function (req, accessToken, refreshToken, profile, done) {
      console.log(profile);
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
