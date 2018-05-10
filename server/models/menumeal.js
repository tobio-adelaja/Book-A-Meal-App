export default function (sequelize, DataTypes) {
  const MenuMeal = sequelize.define('MenuMeals', {
    menuId: {
      type: DataTypes.INTEGER,
      allowNul: false,
    },
    mealId: {
      type: DataTypes.INTEGER,
      allowNul: false,
    },
  });
  return MenuMeal;
}
