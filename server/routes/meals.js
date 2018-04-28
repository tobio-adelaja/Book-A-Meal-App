import express from 'express';

import getMeals from '../controllers/mealController';

const router = express.Router();

// GET request for meals
router.get('/', getMeals);

export default router;
