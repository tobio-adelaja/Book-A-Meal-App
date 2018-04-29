import express from 'express';

import mealController from '../controllers/mealController';

const router = express.Router();

// GET request for meals
router.get('/', mealController.getMeals);

// POST request for meals
router.post('/', mealController.postMeals);

// PUT request for meals
router.put('/:id', mealController.putMeals);

// DELETE request for meals
router.delete('/:id', mealController.deleteMeals);

export default router;
