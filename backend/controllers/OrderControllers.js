const errorHandler = require("express-async-handler");
const { Product } = require("../models/Product.model");
const { Order } = require("../models/Order.model");
const { STATUSCODE, STATUSTEXTE } = require("../utilities/StatusText");
const { ProductSchemaValidate } = require("../schemas/productScheme");
const mongoose = require("mongoose");
const { createOrderSchemaValidate } = require("../schemas/CreateOrderSchema"); 

/**----------------------------------------------------------------
 * @desc create order
 * @Router /api/orders/request
 * @method post
 * @access private (only Logged in users)
 *----------------------------------------------------------------*/

module.exports.createOrder = errorHandler(async (req, res) => {
  // validate  data
  const { error } = createOrderSchemaValidate(req.body);

  if (error) {
    return res.status(STATUSCODE.BAD_REQUEST).json({
      error: error.details[0].message,
    });
  }
  // product id and user id
  const {
    productId,
    LocationToOrder,
    quantityToOrder,
    paymentMethod,
    priceToOrder,
  } = req.body;
  if (!mongoose.isValidObjectId(productId)) {
    return res.status(STATUSCODE.BAD_REQUEST).json({
      message: STATUSTEXTE.BAD_REQUEST,
    });
  }
  // handling order quantity with product
  const product = await Product.findById(productId);
  if (quantityToOrder > product.stock) {
    return res.status(STATUSCODE.NOT_FOUND).json({
      message: "This Quantity Not Found",
    });
  }

  const order = new Order({
    productId: productId,
    userId: req.user.id,
    LocationToOrder: LocationToOrder,
    quantityToOrder: quantityToOrder,
    paymentMethod: paymentMethod,
    priceToOrder: priceToOrder,
  });

  await order.save();
  product.stock -= quantityToOrder;
  await product.save();
  res.status(STATUSCODE.SUCCESS).json({
    message: "Order created successfully",
    data: {
      order: {
        userId: req.user._id,
        LocationToOrder: LocationToOrder,
        quantityToOrder: quantityToOrder,
        paymentMethod: paymentMethod,
        isDelivered: order.isDelivered,
        thumbnail: product.thumbnail,
      },
      message: "Order created successfully",
    },
  });
});

/**----------------------------------------------------------------
 * @desc get all  orders
 * @Router /api/orders/get-all-orders
 * @method get
 * @access private (only Admin )
 *----------------------------------------------------------------*/

module.exports.getAllOrders = errorHandler(async (req, res) => {
  const orders = await Order.find();
  res.status(STATUSCODE.SUCCESS).json({
    message: STATUSTEXTE.SUCCESS,
    data: {
      orders: orders,
    },
  });  
});
