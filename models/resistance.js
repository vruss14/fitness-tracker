const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter the name of the exercise."
  },
  weight: {
    type: Number,
    required: "Enter the amount of weight (lbs)."
  },
  sets: {
    type: Number,
    required: "Enter the number of sets."
  },
  reps: {
    type: Number,
    required: "Enter the number of reps."
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

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;