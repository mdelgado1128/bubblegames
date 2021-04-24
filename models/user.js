const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authSchema = new Schema ({
email:{
  type: String,
  unique: true,
  match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
},
password: {
  type: String,
  trim: true,
  required:"Password is Required",
  validate: [({ length }) => length >= 6, "Password should be longer."]
},


});

const Auth = mongoose.model("Auth", authSchema);

module.exports = Auth;