import meals from '../models/mealModel';

const radix = 10;

class MealController {
  // Display all available meals
  getAllMeals(req, res) {
    return res.status(200).json({
      meals,
    });
  }

  postSingleMeal(req, res) {
    const meal = {
      id: meals.length + 1,
      name: req.body.name,
    };

    meals.push(meal);

    return res.status(201).json({
      success: meal,
      status: 201,
    });
  }

  // Update an existing meal
  editSingleMeal(req, res) {
    let requestId = req.params.id;
    const requestIndex = meals.findIndex(searchMeal => searchMeal.id === parseInt(requestId, radix));
    if (requestIndex === -1) {
      res.status(404).send('The meal with the given ID was not found.');
    } else {
      meals[requestIndex].name = req.body.name;
    }
    return res.status(200).json({ success: 'Meal updated successfully', status: 200 });
  }

  // Delete an existing meal
  deleteSingleMeal(req, res) {
    let requestId = req.params.id;
    const requestIndex = meals.findIndex(searchMeal => searchMeal.id === parseInt(requestId, radix));
    if (requestIndex === -1) {
      res.status(404).send('The meal with the given ID was not found.');
    } else {
      meals.splice(requestIndex, 1);
    }
    return res.status(200).json({ success: 'Meal deleted successfully', status: 200 });
  }
}

const mealController = new MealController();

export default mealController;
