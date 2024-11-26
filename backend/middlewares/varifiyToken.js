const jwt = require("jsonwebtoken");
const { STATUSCODE } = require("../utilities/StatusText");

const verifyToken = async (req, res, next) => {
  console.log("Enterd");
  const authHeaders = req.headers.authorization || req.headers.Authorization;
  if (!authHeaders) {
    return res.status(STATUSCODE.UNAUTHORIZED).json({
      message: "No token provided",
    });
  }
  const token = authHeaders.split(" ")[1];
  try {
    const decodedPayLoad = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decodedPayLoad;
    next();
  } catch (error) {
    return res.status(STATUSCODE.UNAUTHORIZED).json({
      message: "Invalid token",
    });
  }
};

const verifyIsAdmin = async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(STATUSCODE.FORBIDDEN).json({ message: "access denied,(only admin)" });
    }
  });
};



module.exports = { verifyToken, verifyIsAdmin };
