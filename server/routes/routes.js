import express from 'express';

import UserController from '../controllers/userController';

import MenuController from '../controllers/menuController';

import MealController from '../controllers/mealController';

import OrderController from '../controllers/orderController';

import check from '../middleware/auth';

import MealValidator from '../middleware/validate_meal';

import UserValidator from '../middleware/validate_user';

import MenuValidator from '../middleware/validate_menu';

import OrderValidator from '../middleware/validate_order';

const router = express.Router();

router.get('/', (req, res) => { return res.send('Welcome to the Book-A-Meal app!'); });

// POST request for users
router.post('/auth/signup', /* XXXX, */UserValidator.signup, UserController.addSingleUser);

// POST request for users
router.post('/auth/login', /* XXXX, */ UserValidator.signin, UserController.authenticate);

router.use(check.authenticate);
// router.use(check.authorize);

// GET request for order
router.get('/orders', check.authorize, OrderController.getAllOrders);

// POST request for order
router.post('/orders', /* XXXX, */ OrderValidator.addSingleOrder, OrderController.addSingleOrder);

// PUT request for order
router.put('/orders/:id', /* XXXX, */ OrderValidator.editSingleOrder, OrderController.editSingleOrder);

// GET request for meals
router.get('/meals', check.authorize, MealController.getAllMeals);

// POST request for meals
router.post('/meals', check.authorize, /* XXXX, */MealValidator.addSingleMeal, MealController.addSingleMeal);

// PUT request for meals
router.put('/meals/:id', check.authorize, /* XXXX, */ MealController.editSingleMeal);

// DELETE request for meals
router.delete('/meals/:id', check.authorize, /* XXXX, */ MealController.deleteSingleMeal);

// GET request for menu
router.get('/menu', MenuController.getDailyMenu);

// POST request for menu
router.post('/menu', check.authorize, /* XXXX, */MenuValidator.setMenu, MenuController.setDailyMenu);

export default router;
