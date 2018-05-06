import express from 'express';

import userController from '../controllers/userController';

import menuController from '../controllers/menuController';

import mealController from '../controllers/mealController';

import orderController from '../controllers/orderController';

import check from '../middleware/auth.js'

const router = express.Router();

// POST request for users
router.post('/signup', userController.addSingleUser);

// POST request for users
router.post('/signin', userController.authenticate);

//router.use(check.authenticate);
//router.use(check.authorize);

// GET request for users
router.get('/users', check.authorize, userController.getAllUsers);

// PUT request for users
router.put('/users/:id', userController.editSingleUser);

// DELETE request for users
router.delete('/users/:id', userController.deleteSingleUser);

// GET request for order
router.get('/orders', orderController.getAllOrders);

// POST request for order
router.post('/orders', orderController.addSingleOrder);

// PUT request for order
router.put('/orders/:id', orderController.editSingleOrder);

// GET request for meals
router.get('/meals', mealController.getAllMeals);

// POST request for meals
router.post('/meals', mealController.addSingleMeal);

// PUT request for meals
router.put('/meals/:id', mealController.editSingleMeal);

// DELETE request for meals
router.delete('/meals/:id', mealController.deleteSingleMeal);

// GET request for menu
router.get('/menu', menuController.getDailyMenu);

// POST request for menu
router.post('/menu', menuController.setDailyMenu);

export default router;
