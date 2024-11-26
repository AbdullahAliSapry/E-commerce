const { User } = require("../models/User.model");
const ErrorHandler = require("express-async-handler");
const { STATUSCODE, STATUSTEXTE } = require("../utilities/StatusText");
const path = require("path");
const fs = require("fs");

/**----------------------------------------------------------------
 * @desc get user information
 * @Router /api/users/:id
 * @method GET
 * @access public
 *----------------------------------------------------------------*/

module.exports.getUserById = ErrorHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
    .select({
      "-password": false,
      "-__v": false,
      "-isAdmin": false,
      "-createdAt": false,
      "-updatedAt": false,
      "-isCountVerified": false,
    })
    .populate({
      path: "wishlist",
      populate: {
        path: "product",
      },
    })
    .exec();

  if (!user) {
    return res.status(STATUSCODE.NOT_FOUND).json({
      message: STATUSTEXTE.NOT_FOUND,
    });
  }

  res.status(STATUSCODE.SUCCESS).json({
    message: STATUSTEXTE.SUCCESS,
    data: {
      user,
    },
  });
});

/**----------------------------------------------------------------
 * @desc get count of users
 * @Router /api/users
 * @method GET
 * @access private (only admin)
 *----------------------------------------------------------------*/

module.exports.getCountUsers = ErrorHandler(async (req, res) => {
  const users = await User.find().select({ "-password": false, "-__v": false });
  res.status(STATUSCODE.SUCCESS).json({
    message: STATUSTEXTE.SUCCESS,
    data: {
      Count: users.length,
    },
  });
});

/**----------------------------------------------------------------
 * @desc get count of users
 * @Router /api/users
 * @method GET
 * @access private (only admin)
 *----------------------------------------------------------------*/

module.exports.updateUserInfo = ErrorHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (!user) {
    return res.status(STATUSCODE.NOT_FOUND).json({
      message: STATUSTEXTE.NOT_FOUND,
    });
  }
  res.status(STATUSCODE.SUCCESS).json({
    message: STATUSTEXTE.SUCCESS,
    data: {
      user,
    },
  });
});

/**----------------------------------------------------------------
 * @desc upload image Ctrl
 * @Router /api/users/upload-image
 * @method POST
 * @access private (only Logged in user)
 *----------------------------------------------------------------*/

module.exports.uploadPhotoCtrl = ErrorHandler(async (req, res) => {
  // validate file upload
  if (!req.file) {
    return res.status(STATUSCODE.BAD_REQUEST).json({
      data: {
        message: "no file selected",
      },
    });
  }
  // path to photo

  const pathPhoto = path.join(__dirname, `./../images/${req.file.fileName}`);
});
