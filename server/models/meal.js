export default function (sequelize, DataTypes) {
  const Meal = sequelize.define('Meals', {
    name: {
      type: DataTypes.STRING,
      allowNul: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNul: false,
    },
  });

  Meal.associate = (models) => {
    // Meal.belongsToMany(models.Menus, { through: models.MenuMeals });
    Meal.belongsToMany(models.Menus, { through: models.MenuMeals, foreignKey: 'mealId' });

    Meal.belongsToMany(models.Orders, { through: models.OrderMeals, foreignKey: 'mealId' });
  };

  return Meal;
}
