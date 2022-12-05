const express = require('express');

const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
  res.json({ mssg: 'GET all workouts' });
});

// GET single workouts
router.get('/:id', (req, res) => {
  res.json({ mmsg: 'GET single workout' });
});

// POST a new workout
router.post('/', (req, res) => {
  res.json({ mssg: 'POST a new workout' });
});

//DELETE workout
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'DELETE a  workout' });
});

//UPDATE workout
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'UPDATE a  workout' });
});

module.exports = router;
