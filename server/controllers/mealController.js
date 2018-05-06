import db from '../models/index';

const Meal = db.Meals;

const radix = 10;

class MealController {
  // Display all available meals
  getAllMeals(req, res) {
    return Meal
    .findAll()
    .then(function(meals) {
      res.status(200).json({
        meals
      });
    })
    .catch(function() {
      return res.status(400).json({
        message: 'An error occured!'
      });
    })
  }

  addSingleMeal(req, res) {
    return Meal
    .create({
      name: req.body.name,
      price: req.body.price,
      userId: req.body.userId
    })
    .then(function(meal) {
       res.status(201).json({
        success: true,
        meal,
      });
    })
    .catch(function() {
      return res.status(400).json({
        message: 'An error occured!'
      });
    })
  }

  // Update an existing meal
  editSingleMeal(req, res) {
    return Meal
    .findById(req.params.id)
    .then(function(meal) {
      if (!meal) {
        return res.status(404).send({ message: 'Meal not found.' })
      }

      return meal
      .update({
        name: req.body.name,
        price: req.body.price,
        userId: req.body.userId
      })
      .then( () => { res.status(202).send({message: 'Meal updated successfully.'}) } )
    })
    .catch(function(error) {
      return res.status(400).send(error);
    })
  }

  // Delete an existing meal
  deleteSingleMeal(req, res) {
    return Meal
    .findById(req.params.id)
    .then(function(meal) {
      if (!meal) {
        return res.status(404).send({ message: 'Meal not found.' })
      }

      return meal
      .destroy()
      .then( () => { res.status(202).send({message: 'Meal deleted successfully.'}) } )
    })
    .catch(function(error) {
      return res.status(400).send(error);
    })
  }
}

const mealController = new MealController();

export default mealController;
