import express from 'express';

import UserController from '../controllers/userController';

import MenuController from '../controllers/menuController';

import MealController from '../controllers/mealController';

import OrderController from '../controllers/orderController';

import check from '../middleware/auth';

import Validate from '../middleware/validate';

const router = express.Router();

router.get('/', (req, res) => { return res.send('Welcome to the Book-A-Meal app!'); });

// POST request for users
router.post('/auth/signup', Validate.validateCreateUser, UserController.addSingleUser);

// POST request for users
router.post('/auth/login', Validate.validateSignIn, UserController.authenticate);

router.use(check.authenticate);
// router.use(check.authorize);

// GET request for users
router.get('/users', check.authorize, UserController.getAllUsers);

// PUT request for users
router.put('/users/:id', Validate.validateEditDeleteUser, Validate.validateCreateUser, UserController.editSingleUser);

// DELETE request for users
router.delete('/users/:id', Validate.validateEditDeleteUser, UserController.deleteSingleUser);

// GET request for order
router.get('/orders', check.authorize, OrderController.getAllOrders);

// POST request for order
router.post('/orders', Validate.validateCreateOrder, OrderController.addSingleOrder);

// PUT request for order
router.put('/orders/:id', Validate.validateEditDeleteOrder, Validate.validateCreateOrder, OrderController.editSingleOrder);

// GET request for meals
router.get('/meals', check.authorize, MealController.getAllMeals);

// POST request for meals
router.post('/meals', check.authorize, Validate.validateCreateMeal, MealController.addSingleMeal);

// PUT request for meals
router.put('/meals/:id', check.authorize, Validate.validateEditDeleteMeal, Validate.validateCreateMeal, MealController.editSingleMeal);

// DELETE request for meals
router.delete('/meals/:id', check.authorize, Validate.validateEditDeleteMeal, MealController.deleteSingleMeal);

// GET request for menu
router.get('/menu', MenuController.getDailyMenu);

// POST request for menu
router.post('/menu', check.authorize, Validate.validateSetMenu, MenuController.setDailyMenu);

router.use((err, req, res, next) => {
  if (err) {
    let resString = '"errors": [ ';
    for (let counter = 0; counter < err.errors.length; counter += 1) {
      resString += `{ "field": "${err.errors[counter].field[0]}", "message": "${err.errors[counter].messages[0]}" },`;
    }
    resString += ' ]';
    res.status(400).json({ resString });
  } else {
    next();
  }
});

export default router;
