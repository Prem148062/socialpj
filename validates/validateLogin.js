const joi = require("joi");
const validateSchema = require("../utils/validateSchema");

const schema = joi.object({
  email: joi.string().email().required().messages({
    "string.empty": "Enter Your Email.",
    "string.email": "Please Check You Email.",
  }),
  password: joi.string().min(8).required().messages({
    "string.empty": "Enter Your Password.",
    "string.min":
      "Please Check You Password Should have more than 8 Characters.",
  }),
});

module.exports = validateSchema(schema);
