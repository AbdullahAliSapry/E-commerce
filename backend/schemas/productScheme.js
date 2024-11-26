const joi = require("joi");


const ProductSchemaValidate = (obj) => {
  const schemaObj = joi.object({
    title: joi.string().required().trim().min(3).max(70),
    price: joi.number().required(),
    description: joi.string().required().trim().min(3).max(70),
    category: joi.string().required().trim().min(3).max(70),
    thumbnail: joi.string().required().trim().min(3),
    stock: joi.number().required(),
    rating: joi.number().required(),
    brand: joi.string().required(),
    images: joi.array().required(),
    discountPercentage: joi.number(),
  });
  return schemaObj.validate(obj);
};

module.exports = { ProductSchemaValidate };
