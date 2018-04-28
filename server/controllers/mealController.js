import meals from '../models/mealModel';

const radix = 10;

class Meal {
  // Display all available meals
  getMeals(req, res) {
    return res.status(200).json({
      meals,
    });
  }

  postMeals(req, res) {
    const meal = {
      id: meals.length + 1,
      name: req.body.name,
    };

    meals.push(meal);

    return res.status(201).json({
      success: {
        id: meals.length + 1,
        name: req.body.meal,
      },
      status: 201,
    });
  }

  // Update an existing meal
  putMeals(req, res) {
    const changedID = req.params.id;
    const meal = meals.find(c => c.id === parseInt(changedID, radix));
    if (!meal) {
      res.status(404).send('The meal with the given ID was not found.');
    } else {
      for (let i = 0; i < meals.length; i += 1) {
        if (meals[i].id === parseInt(changedID, radix)) {
          meals[i].name = req.body;
        }
      }
    }
    return res.status(200).json({ success: 'Meal updated successfully', status: 200 });
  }

  // Delete an existing meal
  deleteMeals(req, res) {
    const changedID = req.params.id;
    const meal = meals.find(c => c.id === parseInt(changedID, radix));
    if (!meal) {
      res.status(404).send('The meal with the given ID was not found.');
    } else {
      for (let i = 0; i < meals.length; i += 1) {
        if (meals[i].id === parseInt(changedID, radix)) {
          meals.splice(i, 1);
        }
      }
    }
    return res.status(200).json({ success: 'Meal deleted successfully', status: 200 });
  }
}

const mealController = new Meal();

export default mealController;
