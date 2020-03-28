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
        trim: true,
        required: "Please enter excercise type"
      },
      name: {
        type: String,
        trim: true,
        required: "Please name your excercise"
      },

      duration: {
        type: Number,
        required: "Please provide a duration",
        match: [/^[0-9][A-Za-z0-9 -]*$/, "Please enter a number"]
      },

      weight: {
        type: Number,
        required: "Please provide a weight",
        match: [/^[0-9][A-Za-z0-9 -]*$/, "Please enter a number"]
      },

      reps: {
        type: Number,
        required: "Please provide the number of reps",
        match: [/^[0-9][A-Za-z0-9 -]*$/, "Please enter a number"]
      },
      sets: {
        type: Number,
        required: "Please provide the number of sets",
        match: [/^[0-9][A-Za-z0-9 -]*$/, "Please enter a number"]
      }
    }
  ]
});

module.exports = mongoose.model("Workout", WorkoutSchema);
