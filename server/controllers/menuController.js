import menus from '../models/menuModel';

class Menu {
  // Display all menus that have been set
  getDailyMenu(req, res) {
    return res.status(200).json({
      menus,
    });
  }

  // Add the menu for a specific day
  setDailyMenu(req, res) {
    let requestDate = req.body.date;
    const requestIndex = menus.findIndex(singleMenu => singleMenu.date === requestDate);
    if (requestIndex != -1) {
        return res.status(400).json({ success: 'Menu has already been added for this day', status: 400 });
    } else {
      menus.push(req.body);
      return res.status(201).json({ success: 'Menu added successfully', status: 201 });
    }
  }
}

const menuController = new Menu();

export default menuController;
