"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
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
        type: Number,
        match: [/^[0-9][A-Za-z0-9 -]*$/, "Please enter a number"]
      },

      distance: {
        type: Number,
        match: [/^[0-9][A-Za-z0-9 -]*$/, "Please enter a number"]
      },

      weight: {
        type: Number,
        match: [/^[0-9][A-Za-z0-9 -]*$/, "Please enter a number"]
      },

      reps: {
        type: Number,
        match: [/^[0-9][A-Za-z0-9 -]*$/, "Please enter a number"]
      },
      sets: {
        type: Number,
        match: [/^[0-9][A-Za-z0-9 -]*$/, "Please enter a number"]
      }
    }
  ]
});

module.exports = mongoose.model("Workout", WorkoutSchema);
