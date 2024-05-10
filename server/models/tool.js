const mongoose = require("mongoose");

const toolSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image_url: { type: String, required: true },
});

const Tool = mongoose.model("Tool", toolSchema);

// const validate = (data) => {
//   const schema = Joi.object({
//     firstName: Joi.string().required().label("First Name"),
//     lastName: Joi.string().required().label("Last Name")
//   });
//   return schema.validate(data);
// };
//module.exports = { Tool, validate };

module.exports = { Tool };
