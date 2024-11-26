const errorHandler = require("express-async-handler");

const { Cart } = require("../models/Cart.model");
const mongoose = require("mongoose");
const { STATUSCODE, STATUSTEXTE } = require("../utilities/StatusText");
const { Product } = require("../models/Product.model");
/**----------------------------------------------------------------
 * @desc add to cart
 * @Router /api/cart/add
 * @method post
 * @access private (only Logged in users)
 *----------------------------------------------------------------*/

module.exports.addToCart = errorHandler(async (req, res) => {
  const { productId } = req.body;

  if (!mongoose.isValidObjectId(productId)) {
    return res.status(STATUSCODE.BAD_REQUEST).json({
      message: "Invalid ObjectId",
      data: null,
    });
  }
  const productInCart = await Cart.findOne({
    userId: req.user.id,
    productId: productId,
  });
  console.log(productInCart);
  if (productInCart) {
    return res.status(STATUSCODE.BAD_REQUEST).json({
      message: "Product already in cart",
      data: null,
    });
  }
  const product = await Product.findById(productId);
  if (!product) {
    return res
      .status(STATUSCODE.NOT_FOUND)
      .json({ message: STATUSTEXTE.NOT_FOUND, data: null });
  }

  const cart = new Cart({
    userId: req.user.id,
    productId: product._id,
  });

  await cart.save();
  console.log("req");
  return res.status(STATUSCODE.SUCCESS).json({
    message: "Product Added To Cart successfully",
    data: { product: product },
  });
});

/**----------------------------------------------------------------
 * @desc remove product from cart
 * @Router /api/cart/remove-product/:idProduct
 * @method delete
 * @access private (only Logged in users)
 *----------------------------------------------------------------*/
module.exports.removeFromCart = errorHandler(async (req, res) => {
  const { productId } = req.params;
  if (!mongoose.isValidObjectId(productId)) {
    return res.status(STATUSCODE.BAD_REQUEST).json({
      message: "Invalid ObjectId",
      data: null,
    });
  }

  const product = await Cart.find({
    userId: req.user.id,
    productId: productId,
  });

  if (!product) {
    return res
      .status(STATUSCODE.NOT_FOUND)
      .json({ message: STATUSTEXTE.NOT_FOUND, data: null });
  }

  await Cart.findByIdAndDelete(product[0]._id);

  return res.status(STATUSCODE.SUCCESS).json({
    message: "Product deleted from  WhishList successfully",
    data: null,
  });
});
