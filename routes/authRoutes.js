const passport = require('passport');
const rateLimit = require('express-rate-limit');

// Config rate limiter ==============================================
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 mins
    max: 100, // Limit number of requests per IP to 100
    delayMs: 0 // No delay
});
// ==================================================================

module.exports = (app) => {
    app.use(limiter); // Limit rate
    app.get(
        '/auth/google/callback', passport.authenticate('google')
    );
    app.get('/auth/google/', passport.authenticate('google', {
        scope: ['profile', 'email']
    })
    );
};