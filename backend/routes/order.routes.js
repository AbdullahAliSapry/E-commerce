const router = require("express").Router();

const { createOrder } = require("../controllers/OrderControllers");
const { verifyToken } = require("../middlewares/varifiyToken");

//route to create order
router.route("/create").post(verifyToken, createOrder);

//

module.exports = router;
