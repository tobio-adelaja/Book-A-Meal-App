import menu from '../models/menuModel';

class Menu {
  // Display all menus that have been set
  getMenu(req, res) {
    return res.status(200).json({
      menu,
    });
  }

  // Add the menu for a specific day
  postMenu(req, res) {
    for (let i = 0; i < menu.length; i += 1) {
      if (req.body.date === menu[i].date) {
        return res.status(400).json({ success: 'Menu has already been added for this day', status: 400 });
      }
    }

    menu.push(req.body);
    return res.status(201).json({ success: 'Menu added successfully', status: 201 });
  }
}

const menuController = new Menu();

export default menuController;
