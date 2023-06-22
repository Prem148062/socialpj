const joi = require("joi");
const validateSchema = require("../utils/validateSchema");

const schema = joi.object({
  displayName: joi.string().max(50).messages({
    "string.max": "Please Enter your displayName short than 50 characters.",
  }),
  gender: joi.string().valid("male", "female", "none").required().messages({
    "any.valid": "Please Enter your gender is Correct ?",
  }),
  birthDate: joi
    .string()
    .optional()
    .allow("")
    .regex(/^\d{4}-\d{2}-\d{2}/),
});

module.exports = validateSchema(schema);
