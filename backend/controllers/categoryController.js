const errorHandler = require("express-async-handler");
const { STATUSCODE, STATUSTEXTE } = require("../utilities/StatusText");
const {
  validateSchemaToCategory,
} = require("../schemas/validateSchemaToCategory");

const path = require("path");

const { uploadCloudinary } = require("../utilities/cloudinry");

const { Category } = require("../models/Category.model");
const fs = require("fs");

/**----------------------------------------------------------------
 * @desc add a new category
 * @Router /api/v1/category
 * @method POST
 * @access private (only Admin)
 *----------------------------------------------------------------*/

module.exports.addNewCategory = errorHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "no file provided" });
  }
  const { errors } = validateSchemaToCategory(req.body);
  if (errors) {
    return res.status(400).json({ message: errors.details[0].message });
  }
  // path to photo
  const pathPhoto = path.join(__dirname, `../images/${req.file.filename}`);

  const result = await uploadCloudinary(pathPhoto);

  const category = new Category({
    name: req.body.name,
    imgCategory: {
      url: result.secure_url,
      publicId: result.public_id,
    },
    userId: req.user.id,
    totalAmount: req.body.totalAmount,
    description: req.body.description,
  });

  await category.save();

  fs.unlinkSync(pathPhoto);
  return res.status(STATUSCODE.CREATED).json({
    message: STATUSTEXTE.CREATED,
    data: "category added successfully",
  });
});

/**----------------------------------------------------------------
 * @desc get all categories
 * @Router /api/v1/category
 * @method get
 * @access private (only Admin)
 *----------------------------------------------------------------*/

module.exports.getAllCategories = errorHandler(async (req, res) => {
  const categories = await Category.find().select({
    createdAt: false,
    updatedAt: false,
    __v:false
  });
  res.status(STATUSCODE.SUCCESS).json({
    message: STATUSTEXTE.SUCCESS,
    data: {
      categories: categories,
    },
  });
});
