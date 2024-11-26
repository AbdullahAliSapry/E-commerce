const joi = require("joi");

const createOrderSchemaValidate = (obj) => {
  const orderSchema = joi.object({
    LocationToOrder: joi.string().required(),
    quantityToOrder: joi.number().required(),
    productId: joi.string().required("product id is required"),
    paymentMethod:joi.string().required("payment method is required"),
    priceToOrder: joi.number().required(),
  });
  return orderSchema.validate(obj);
};

module.exports = { createOrderSchemaValidate };
