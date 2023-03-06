const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const absenceSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  startDate: { type: Date, default: Date.now },
  endDate: Date,
  reason: String,
});

module.exports = Absence = model("absence", absenceSchema);
