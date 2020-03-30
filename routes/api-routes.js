"use strict";
const router = require("express").Router();
const Workout = require(`../models/workoutModel`);

router.get(`/api/workouts`, (req, res) => {
  Workout.find({})
    .then(dbExercise => {
      console.log(dbExercise);
      return res.json(dbExercise);
    })
    .catch(err => res.status(400).json(err));
});
router.get(`/api/workouts/range`, (req, res) => {
  Workout.find({})
    .then(dbExercise => res.json(dbExercise))
    .catch(err => res.status(404).json(err));
});

module.exports = router;
