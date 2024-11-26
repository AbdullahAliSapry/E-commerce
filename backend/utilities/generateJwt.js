const jwt = require("jsonwebtoken");

const generateJwt = async (userData) => {
  const token = jwt.sign(userData, process.env.SECRET_KEY);
  return token;
};
module.exports = { generateJwt };