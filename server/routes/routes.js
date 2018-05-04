import express from 'express';

import mealController from '../controllers/mealController';

const router = express.Router();

// GET request for meals
router.get('/meals', mealController.getAllMeals);

// POST request for meals
router.post('/meals', mealController.postSingleMeal);

// PUT request for meals
router.put('/meals/:id', mealController.editSingleMeal);

// DELETE request for meals
router.delete('/meals/:id', mealController.deleteSingleMeal);

export default router;
