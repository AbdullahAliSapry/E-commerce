const handlerError = require("express-async-handler");
const {
  UserSchemaValidate,
  loginSchemaValidate,
} = require("../schemas/authSchema");

const { User } = require("../models/User.model");

const { STATUSCODE, STATUSTEXTE } = require("../utilities/StatusText");

const { generateJwt } = require("../utilities/generateJwt");

const bcrypt = require("bcrypt");

const crypto = require("crypto");

const { VerificationToken } = require("./../models/VerficationToken.model");

const SendEmail = require("../utilities/SendEmail");

/**----------------------------------------------------------------
 * @desc register function
 * @Router /api/auth/register
 * @method POST
 * @access public
 *----------------------------------------------------------------*/

module.exports.registerCtrl = handlerError(async (req, res) => {
  // validate on user data
  const { error } = UserSchemaValidate(req.body);
  if (error) {
    return res.status(STATUSCODE.BAD_REQUEST).json({
      error: error.details[0].message,
    });
  }
  // validate on unique user
  const userToValidate = await User.findOne({ email: req.body.email });
  if (userToValidate) {
    return res.status(STATUSCODE.BAD_REQUEST).json({
      message: "User already exists",
    });
  }

  // hashed password to user

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  await user.save();
  // create  verifyToken to user to verify email
  const verificationToken = new VerificationToken({
    userId: user._id,
    verifyToken: crypto.randomBytes(32).toString("hex"),
  });

  // save verifyToken
  await verificationToken.save();
  // making link we will send to user
  const link = `${process.env.LINK_CLIENT}/users/${user._id}/verify/${verificationToken.verifyToken}`;

  //make html template
  const htmlTemplate = `<h1>Hello ${user.email.split("@")[0]}</h1>
  <p>Please click on the below link to verify your email</p>
  <a href="${link}">Click Here</a>
  <p>If you did not make this request, please ignore this email</p>
  `;
  //sending email

  await SendEmail(
    user.email,
    `Hello ${user.email.split("@")[0]}`,
    htmlTemplate
  );

  return res.status(STATUSCODE.CREATED).json({
    message: "we sent to you an email. Please verify your email address",
  });
});

/**----------------------------------------------------------------
 * @desc login function
 * @Router /api/auth/login
 * @method POST
 * @access public
 *----------------------------------------------------------------*/

module.exports.loginCtrl = handlerError(async (req, res) => {
  // validate on user data
  const { error } = loginSchemaValidate(req.body);
  if (error) {
    return res.status(STATUSCODE.BAD_REQUEST).json({
      error: error.details[0].message,
    });
  }
  // validate on user is already existing
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(STATUSCODE.BAD_REQUEST).json({
      message: STATUSTEXTE.NOT_FOUND,
    });
  }
  // compare password
  const isMatch = await bcrypt.compare(req.body.password, user.password);
  console.log(isMatch);
  if (!isMatch) {
    return res.status(STATUSCODE.BAD_REQUEST).json({
      message: "incorrect password please enter password",
    });
  }

  if (!user.isCountVerified) {
    let verificationToken = await VerificationToken.findOne({
      userId: user._id,
    });
    console.log(verificationToken);
    if (!verificationToken) {
      verificationToken = new VerificationToken({
        userId: user._id,
        verifyToken: crypto.randomBytes(32).toString("hex"),
      });
      await verificationToken.save();
    }

    const link = `${process.env.LINK_CLIENT}/users/${user._id}/verify/${verificationToken.verifyToken}`;
    // make html template
    const htmlTemplate = `<h1>Hello ${user.email.split("@")[0]}</h1>
      <p>Please click on the below link to verify your email</p>
      <a href="${link}">Click Here</a>
      <p>If you did not make this request, please ignore this email</p>
  `;
    //sending email
    await SendEmail(
      user.email,
      `Hello ${user.email.split("@")[0]}`,
      htmlTemplate
    );

    return res.status(400).json({
      message: "we sent to you an email. Please verify your email address",
    });
  }

  // Generate token
  const token = await generateJwt({
    id: user._id,
    email: user.email,
    isAdmin: user.isAdmin,
  });

  return res.status(STATUSCODE.SUCCESS).json({
    message: "User logged in successfully",
    data: {
      token: token,
      id: user._id,
      isAdmin: user.isAdmin,
      profilePhoto: user.imagePortfolio,
      fullName: user.name,
    },
  });
});

/**----------------------------------------------------------------
 * 
 * @desc verify email to user
 * 
 * @Router  /api/auth/:userId/verify/:token
 * 
 * @method POST
 * 
 * @access public
 ----------------------------------------------------------------*/

module.exports.verifyTokenCtrl = handlerError(async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (!user) {
    return res.status(400).json({ message: "invalid link" });
  }

  const verificationToken = await VerificationToken.findOne({
    userId: user._id,
    verifyToken: req.params.token,
  });

  if (!verificationToken) {
    return res.status(400).json({ message: "invalid link" });
  }

  user.isCountVerified = true;

  await user.save();
  await VerificationToken.deleteOne(verificationToken);

  res.status(200).json({ message: "Your account verified" });
});
