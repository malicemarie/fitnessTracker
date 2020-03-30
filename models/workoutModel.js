"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true
      },
      name: {
        type: String,
        trim: true
      },

      duration: {
        type: Number
      },

      weight: {
        type: Number
      },

      reps: {
        type: Number
      },
      sets: {
        type: Number
      }
    }
  ]
});

module.exports = mongoose.model("Workout", WorkoutSchema);
