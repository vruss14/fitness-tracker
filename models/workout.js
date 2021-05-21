const mongoose = require("mongoose");
const moment = require('moment');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

  exercises: [ {
    _id: false,
    type: {
      type: String,
      trim: true
    },
    name: {
      type: String,
      trim: true,
    },
    duration: {
      type: Number,
    },
    distance: {
      type: Number,
      default: 0
    },
    weight: {
      type: Number,
      default: 0
    },
    sets: {
      type: Number,
      default: 0
    },
    reps: {
      type: Number,
      default: 0
    },
  } ],
  date: {
    type: Date,
    default: Date.now
  },
  formatted_date: {
    type: String,
    default: moment().format('MMMM Do YYYY')
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;