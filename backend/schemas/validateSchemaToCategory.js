const joi = require("joi");

module.exports.validateSchemaToCategory = (obj) => {
  const schemaObj = joi.object({
    name: joi.string().required(),
    totalAmount: joi.number().required()
  });
  return schemaObj.validate(obj);
};
