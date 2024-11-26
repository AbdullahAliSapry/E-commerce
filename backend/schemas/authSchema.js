const joi = require("joi");

const UserSchemaValidate = (obj) => {
  const schemaObj = joi.object({
    name: joi.string().required().trim().min(3).max(70),
    email: joi.string().required().trim().email(),
    password: joi.string().required().trim().min(6).max(20),
  });
  return schemaObj.validate(obj);
};


// register user with google account

const UserSchemaGoogle = (obj) => {
  const schemaObj = joi.object({
    name: joi.string().required().trim().min(3).max(70),
    email: joi.string().required().trim().email(),
  });
  return schemaObj.validate(obj);
};

const loginSchemaValidate = (obj) => {
  const schemaObj = joi.object({
    email: joi.string().required().trim().email(),
    password: joi.string().required().trim().min(6).max(20),
  });
  return schemaObj.validate(obj);
};

module.exports = { UserSchemaValidate, loginSchemaValidate };
