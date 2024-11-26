
const { getUserById } = require("./../controllers/UserController");
const validateObjectId = require("../middlewares/validateObjectId");

const router = require("express").Router();

router.route("/:id").get(validateObjectId, getUserById);

module.exports = router;
