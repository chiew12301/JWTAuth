

//import jsonwebtoken and config
const jwt = require("jsonwebtoken");
const config = require('../../config');

//This function verifyToken will verify the token coming from headers 
const verifyToken = (req, res, next) => {
  const token = req.headers("authorization");

  if (!token) {
    return res.status(403).send("A token is reuqired for authentication");
  }

  try {
    const decoded = jwt.verify(token, config.AUTH_SECRET);
    req.claims = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }

  return next();
};

module.exports = verifyToken;