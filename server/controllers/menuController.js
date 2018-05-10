import db from '../models/index';

const Menu = db.Menus;
const MenuMeal = db.MenuMeals;

class MenuController {
  // Display the menu for a specific day
  static getDailyMenu(req, res) {
    const requestDate = new Date().toDateString();
    return Menu
      .findOne({ where: { date: requestDate } })
      .then((menu) => {
        if (!menu) {
          return res.status(404).json({ message: 'No menu items available.' });
        }
        return res.status(200).json({ menu });
      })
      .catch(err => res.status(400).json({ message: err.message }));
  }

  // Display the menu for a specific day
  static setDailyMenu(req, res) {
    const requestDate = new Date().toDateString();
    return Menu
      .create({
        date: requestDate,
        userId: req.body.userId,
      })
      .then((menu) => {
        const mealCount = req.body.meals.length;
        for (let counter = 0; counter < mealCount; counter += 1) {
          MenuMeal
            .create({
              menuId: menu.dataValues.id,
              mealId: req.body.meals[counter],
            })
            .then((menuMeal) => {
              if (!menuMeal) {
                res.status(400).json({ message: 'An error occured while processing request.' });
              }
            });
        }
        res.status(200).send({
          message: `Menu added successfully for ${requestDate}.`,
          menu,
        });
      })
      .catch(err => res.status(400).json({ message: err.message }));
  }
}

export default MenuController;
