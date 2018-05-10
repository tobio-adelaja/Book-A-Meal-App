import sequelize from 'sequelize';

import db from '../models/index';

const Meal = db.Meals;

class MealController {
  // Display all available meals
  static getAllMeals(req, res) {
    return Meal
      .findAll()
      .then((meals) => {
        if (meals.length === 0) {
          return res.status(404).json({ message: 'No meals available' });
        }
        return res.status(200).json({ meals });
      })
      .catch(err => res.status(400).json({ message: err.message }));
  }

  // Add a single meal
  static addSingleMeal(req, res) {
    Meal
      .findOne({ where: sequelize.where(sequelize.fn('upper', sequelize.col('name')), req.body.name.toUpperCase().trim()) })
      .then((meal) => {
        if (meal) {
          return res.status(400).json({ message: 'Cannot add 2 meals with the same name.' });
        }
        return Meal
          .create({
            name: req.body.name.trim(),
            price: req.body.price,
          })
          .then((newMeal) => {
            res.status(201).json({
              success: true,
              newMeal,
            });
          })
          .catch(err => res.status(400).json({ message: err.message }));
      })
      .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
  }

  // Update an existing meal
  static editSingleMeal(req, res) {
    return Meal
      .findById(req.params.id)
      .then((meal) => {
        if (!meal) {
          return res.status(404).send({ message: 'Meal not found.' });
        }

        return meal
          .update({
            name: req.body.name.trim(),
            price: req.body.price,
          })
          .then(updatedMeal => res.status(201).send({
            message: 'Meal updated successfully.',
            updatedMeal,
          }));
      })
      .catch(err => res.status(400).json({ message: err.message }));
  }

  // Delete an existing meal
  static deleteSingleMeal(req, res) {
    return Meal
      .findById(req.params.id)
      .then((meal) => {
        if (!meal) {
          return res.status(404).send({ message: 'Meal not found.' });
        }

        return meal
          .destroy()
          .then(() => res.status(202).send({ message: 'Meal deleted successfully.' }));
      })
      .catch(err => res.status(400).json({ message: err.message }));
  }
}

export default MealController;
