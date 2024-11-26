const router = require("express").Router();

const {
  addNewCategory,
  getAllCategories,
} = require("../controllers/categoryController");
const { uploadPhoto } = require("../middlewares/UploadImg");
const { verifyIsAdmin } = require("../middlewares/varifiyToken");
// create a new category
router
  .route("/")
  .post(verifyIsAdmin, uploadPhoto.single("image"), addNewCategory);

// get all categories
router.route("/").get(getAllCategories);

module.exports = router;
