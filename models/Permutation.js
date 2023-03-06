const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const permutationSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  date: { type: Date, default: Date.now },
});

module.exports = Permutation = model("permutation", permutationSchema);
