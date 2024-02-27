const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  try {
    // Check if the token exists in the request cookies
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
      return res.status(401).json({ errorMessage: "Unauthorized" });
    }

    // Verify the token and extract the user ID
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified.user;

    // Call the next middleware or route handler
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }
}

module.exports = auth;
