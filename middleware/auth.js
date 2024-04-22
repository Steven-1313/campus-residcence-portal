<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const secretKey = APP.SECRET_KEY

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];  // Bearer Token

    if (token == null) return res.sendStatus(401); // if no token, return unauthorized

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403); // if token is not valid or expired, return forbidden

        req.user = user; // Add the decoded user to the request so that it can be used in the route handler
        next(); // proceed to the next middleware or route handler
    });
};

module.exports = authenticateToken;
=======
// middleware/checkRole.js

const jwt = require('jsonwebtoken');
const { APP } = require('../config');

const checkRole = (roleRequired) => (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Authentication failed" });
    }

    try {
        const decoded = jwt.verify(token, APP.SECRET_KEY);
        if (decoded.role !== roleRequired) {
            return res.status(403).json({ message: "Access denied: insufficient permissions" });
        }
        next();
    } catch (error) {
        return res.status(400).json({ message: "Invalid token" });
    }
};

module.exports = checkRole;
>>>>>>> hasanboy
