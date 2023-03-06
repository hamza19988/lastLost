const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  admin: { type: Boolean, default: false },
  technicien: { type: Boolean, default: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = User = model("user", userSchema);
