const passport = require('passport');
const GoogleStragey = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(new GoogleStragey({
    clientID: keys.googleClientid,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},
    (accessToken, refreshToken, profile, done) => {
        console.log('access token', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile: ', profile);
    }
)
);