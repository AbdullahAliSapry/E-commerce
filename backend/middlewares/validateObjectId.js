const mongoose = require("mongoose");
const { STATUSCODE } = require("../utilities/StatusText");

const validateObjectId = (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(STATUSCODE.BAD_REQUEST).json({
      message: "Invalid ObjectId",
      data: null,
    });
  }

  next();
};

module.exports = validateObjectId;
