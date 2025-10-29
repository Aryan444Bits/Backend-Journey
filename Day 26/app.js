require('dotenv').config();
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');

const app = express();

app.use(passport.initialize());

// Configure Passport to use Google OAuth 2.0 strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
    // Here, you would typically find or create a user in your database
    // For this example, we'll just return the profile
    return done(null, profile);
}));

// Route to initiate Google OAuth flow
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback route that Google will redirect to after authentication
app.get('/auth/google/callback',
    passport.authenticate('google', { session: false }),
    (req, res) => {
        // Generate a JWT for the authenticated user
        const token = jwt.sign({ id: req.user.id, displayName: req.user.displayName }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // Send the token to the client
        res.json({ token });
    }
);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});