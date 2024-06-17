const mongoose = require("mongoose");
const Joi = require("joi");

const toolSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image_url: { type: String, required: true },
});

const Tool = mongoose.model("Tool", toolSchema);

const validate = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().label("Tytul"),
    image_url: Joi.string().required().label("Image_url")
  });
  return schema.validate(data);
};
module.exports = { Tool, validate };

//module.exports = { Tool };
