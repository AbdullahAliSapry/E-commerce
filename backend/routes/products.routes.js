const { getAllProducts, createProduct, getProductById, removeProduct, EditProduct, getRelatedProducts, getCountProducts } = require("../controllers/productsControllers");
const validateObjectId = require("../middlewares/validateObjectId");
const { verifyIsAdmin } = require("../middlewares/varifiyToken");

const router = require("express").Router();


router.get("/",getAllProducts);
router.route("/").post(verifyIsAdmin, createProduct);
router.route("/count").get(getCountProducts);
router.route("/:id").get(validateObjectId, getProductById);
router.route("/:id").delete(verifyIsAdmin, validateObjectId, removeProduct);
router.route("/:id").patch(verifyIsAdmin, validateObjectId, EditProduct);
router.route("/related/:id").get(validateObjectId, getRelatedProducts);

module.exports=router