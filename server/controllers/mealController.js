const meals = [
  { id: 1, name: 'Rice with beef' },
  { id: 2, name: 'Rice with chicken' },
  { id: 3, name: 'Rice with plantain' },
];

// Display all available meals
function getMeals(req, res) {
  res.send(meals);
  res.end();
}

export default getMeals;
