const { registerCtrl, loginCtrl, verifyTokenCtrl } = require("../controllers/authControllers");
const { verifyToken } = require("../middlewares/varifiyToken");

const router = require("express").Router();
const passport = require("passport");



router.post("/register", registerCtrl);
router.route("/login").post(loginCtrl);
router.get("/:userId/verify/:token", verifyTokenCtrl);

const CLIENT_URL_SUCCESS = "http://localhost:5173/auth/signup/success";
const CLIENT_URL_FAIlURE = "http://localhost:5173/auth/signup/failure";

// contact with google
router.get(
  "/google/signup",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

/**
 *in front end
 * successRedirect
 * failureRedirect
 *
 */

// after google authenticate will  go to route /google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL_SUCCESS,
    failureRedirect: CLIENT_URL_FAIlURE,
  })
);

// router.get("/login/success", (req, res) => {
//   if (req.user) {
//     res.status(200).json({
//       success: true,
//       message: "successfull",
//       user: req.user,
//       //   cookies: req.cookies
//     });
//   }
// });
// //localhost:5000/auth/google
// router.get("/login/failed", (req, res) => {
//   res.status(401).json({
//     success: false,
//     message: "failure",
//   });
// });

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

module.exports = router;

// ---------------------------------------------------

// router.get("/login/success", (req, res) => {
//   if (req.user) {
//     res.status(200).json({
//       success: true,
//       message: "successfull",
//       user: req.user,
//       //   cookies: req.cookies
//     });
//   }
// });
// //localhost:5000/auth/google
// router.get("/login/failed", (req, res) => {
//   res.status(401).json({
//     success: false,
//     message: "failure",
//   });
// });

// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect(CLIENT_URL);
// });

// router.get(
//   "/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

// module.exports = router;
