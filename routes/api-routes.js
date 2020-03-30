"use strict";
const router = require("express").Router();
const Workout = require(`../models/workoutModel`);

router.post(`/api/workouts`, ({ body }, res) => {
  Workout.create(body)
    .then(allExercises => res.json(allExercises))
    .catch(err => res.status(400).json(err));
});

router.put(`/api/workouts/:id`, ({ body, params }, res) => {
  Workout.findOneAndUpdate({ _id: params.id }, { $push: { exercises: body } })
    .then(allExercises => res.json(allExercises))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get(`/api/workouts`, res => {
  Workout.find({})
    .then(allExercises => {
      console.log(allExercises);
      return res.json(allExercises);
    })
    .catch(err => res.status(400).json(err));
});
router.get(`/api/workouts/range`, res => {
  Workout.find({})
    .then(allExercises => res.json(allExercises))
    .catch(err => res.status(404).json(err));
});

module.exports = router;
