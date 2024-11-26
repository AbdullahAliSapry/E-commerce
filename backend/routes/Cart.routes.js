const router = require("express").Router();
const { addToCart, removeFromCart } = require("../controllers/CartController");
const { verifyToken } = require("../middlewares/varifiyToken");
router.route("/add").post(verifyToken, addToCart);

router.route("/delete-product/:productId").delete(verifyToken, removeFromCart);

module.exports = router;
