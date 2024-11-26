const errorHandler = require("express-async-handler");
const { Product } = require("../models/Product.model");
const { STATUSCODE, STATUSTEXTE } = require("../utilities/StatusText");
const { ProductSchemaValidate } = require("../schemas/productScheme");

/**----------------------------------------------------------------
 * @desc get all products
 * @Router /api/products
 *
 * @method GET
 *
 * @access public
 *----------------------------------------------------------------*/

module.exports.getAllProducts = errorHandler(async (req, res) => {
  let PRODUCT_PER_PAGE = 9;
  let { pageNumber, category, limit } = req.query;
  if (limit != null) {
    PRODUCT_PER_PAGE = +limit;
  }
  let products;
  pageNumber = Number(pageNumber);
  if (pageNumber) {
    products = await Product.find()
      .skip((pageNumber - 1) * PRODUCT_PER_PAGE)
      .limit(PRODUCT_PER_PAGE)
      .sort({ createdAt: -1 });
  } else if (category) {
    products = await Product.find({
      category: category,
    }).sort({ createdAt: -1 });
  } else if (pageNumber && category) {
    products = await Product.find({ category })
      .skip((pageNumber - 1) * PRODUCT_PER_PAGE)
      .limit(PRODUCT_PER_PAGE);
  } else {
    products = await Product.find().sort({ createdAt: -1 });
  }

  res.status(STATUSCODE.SUCCESS).json({
    message: STATUSTEXTE.SUCCESS,
    data: {
      products,
    },
  });
});

/**----------------------------------------------------------------
 * @desc create a new product
 * @Router /api/products
 *
 * @method Post
 *
 * @access private (only admin)
 *----------------------------------------------------------------*/

module.exports.createProduct = errorHandler(async (req, res) => {
  const { error } = ProductSchemaValidate(req.body);

  if (error) {
    console.log(error.details[0].message);
    return res.status(STATUSCODE.BAD_REQUEST).json({
      error: error.details[0].message,
    });
  }
  console.log(req.body);
  const product = new Product(req.body);

  await product.save();
  res
    .status(STATUSCODE.SUCCESS)
    .json({
      message: "Product Created Successfully ",
      data: { product: product },
    });
});

/**----------------------------------------------------------------
 * @desc get single product with id
 * @Router /api/v1/products/:id
 *
 * @method get
 * @access public
 *----------------------------------------------------------------*/

module.exports.getProductById = errorHandler(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (!product) {
    return res
      .status(STATUSCODE.NOT_FOUND)
      .json({ message: STATUSTEXTE.NOT_FOUND, data: null });
  }

  res
    .status(STATUSCODE.SUCCESS)
    .json({ message: STATUSTEXTE.SUCCESS, data: { product: product } });
});

/**----------------------------------------------------------------
 * @desc delete single product with id
 * @Router /api/products/:id
 * @method delete
 * @access private (only admin)
 *----------------------------------------------------------------*/

module.exports.removeProduct = errorHandler(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (!product) {
    return res
      .status(STATUSCODE.NOT_FOUND)
      .json({ message: STATUSTEXTE.NOT_FOUND, data: null });
  }

  const result = await Product.findByIdAndDelete(id);
  return res.status(STATUSCODE.SUCCESS).json({
    message: STATUSTEXTE.SUCCESS,
    data: {
      product: result,
      message: "product deleted successfully",
    },
  });
});

/**----------------------------------------------------------------
 * @desc edit single product with id
 * @Router /api/products/:id
 * @method PATCH
 * @access private (only admin)
 *----------------------------------------------------------------*/

module.exports.EditProduct = errorHandler(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (!product) {
    return res
      .status(STATUSCODE.NOT_FOUND)
      .json({ message: STATUSTEXTE.NOT_FOUND, data: null });
  }

  const newProduct = await Product.findByIdAndUpdate(
    id,
    { ...req.body },
    {
      new: true,
    }
  );

  return res.status(STATUSCODE.SUCCESS).json({
    message: STATUSTEXTE.SUCCESS,
    data: {
      product: newProduct,
    },
  });
});

/**----------------------------------------------------------------
 * @desc get Related Products
 * @Router /api/products/:id
 * @method GET
 * @access public
 *----------------------------------------------------------------*/

module.exports.getRelatedProducts = errorHandler(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (!product) {
    return res
      .status(STATUSCODE.NOT_FOUND)
      .json({ message: STATUSTEXTE.NOT_FOUND, data: null });
  }

  const newProducts = await Product.find({ category: product.category });

  return res.status(STATUSCODE.SUCCESS).json({
    message: STATUSTEXTE.SUCCESS,
    data: {
      product: newProducts,
    },
  });
});

/**----------------------------------------------------------------
 * @desc get Count Of  Products
 * @Router /api/products/count
 * @method GET
 * @access public
 *----------------------------------------------------------------*/

module.exports.getCountProducts = errorHandler(async (req, res) => {
  const ProductsCount = await Product.countDocuments();
  res.status(STATUSCODE.SUCCESS).json({
    message: STATUSTEXTE.SUCCESS,
    data: {
      Count: ProductsCount,
    },
  });
});
