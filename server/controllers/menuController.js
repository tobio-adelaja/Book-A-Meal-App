import db from '../models/index';

const Menu = db.Menus;

const radix = 10;

class MenuController {
  // Display all available meals
  getDailyMenu(req, res) {
    return Menu
    .findOne({where: { date: req.headers.date } })
    .then(function(menus) {
      res.status(200).json({
        menu
      });
    })
    .catch(function() {
      return res.status(400).json({
        message: 'An error occured!'
      });
    })
  }

  setDailyMenu(req, res) {
    return Menu
    .create({
      date: req.body.date,
      mealId: req.body.mealId,
      userId: req.body.userId
    })
    .then(function(menu) {
       res.status(201).json({
        menu,
      });
    })
    .catch(function() {
      return res.status(400).json({
        message: 'An error occured!'
      });
    })
  }
}

const menuController = new MenuController();

export default menuController;
