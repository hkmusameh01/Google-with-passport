import passport from "passport";
import { Strategy } from "passport-google-oauth20";
const GoogleStrategy = Strategy;

const GOOGLE_CLIENT_ID =
  "309610081009-mkd70o1jpsc872q604vvcddi4ekcgmqt.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
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
