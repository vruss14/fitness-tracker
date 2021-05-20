const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardioSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter the name of the exercise."
  },
  distance: {
    type: Number,
    required: "Enter a valid distance (in miles)."
  },
  duration: {
      type: Number,
      required: "Enter a time (in minutes)."
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;