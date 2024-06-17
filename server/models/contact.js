const mongoose = require("mongoose");
const Joi = require("joi");

const contactSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  country: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  desc: { type: String, required: true },
});

const Contact = mongoose.model("Contact", contactSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("Imie"),
    lastName: Joi.string().required().label("Nazwisko"),
    age: Joi.number().positive().required().label("Wiek"),
    country: Joi.string().required().label("Panstwo"),
    phone: Joi.string().pattern(new RegExp('^[0-9]{9}$')).required().label("Phone"),
    email: Joi.string().email().required().label("Email"),
    desc: Joi.string().required().label("Description"),
  });
  return schema.validate(data);
};

module.exports = { Contact, validate };
