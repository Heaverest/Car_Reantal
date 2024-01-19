// const config = require("config");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Joi = require("joi");
const PasswordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 60
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  //reservations:[{type:Schema.Type.ObjectId, ref:"reservations"}]
});

const User = mongoose.model("User", userSchema);


function validateUser(user) {

  const complexityOptions = {
        min: 3,
        max: 255,
        lowerCase: 1,
        upperCase: 1,
        numeric: 1,
        requirementCount: 3
      };
  // no change here
  const schema = Joi.object({
    name: Joi.string().min(1).max(55).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: PasswordComplexity(complexityOptions )
  });
  // note that we call schema.validate instead of Joi.validate
  // (which doesn't seem to exist anymore)
  return schema.validate(user);
}

// function validateUser(user) {
//   const schema = {
//     name: Joi.string()
//       .regex(/^[a-zA-Z0-9 ,.'-]+$/)
//       .min(5)
//       .max(50)
//       .required(),
//     email: Joi.string()
//       .email()
//       .min(5)
//       .max(255)
//       .required(),
//     password: Joi.string()
//       .min(8)
//       .max(255)
//       .required(),
    
//   };

//   let result = Joi.validate(user, schema);
//   if (!result["error"]) result = validatePassword(user.password);

//   return result;
// }

// function validatePassword(password) {
//   

//   return Joi.validate(password, new PasswordComplexity(complexityOptions));
// }

exports.User = User;
exports.validate = validateUser;