export default function (sequelize, DataTypes) {
  const Menu = sequelize.define('Menus', {
    date: {
      type: DataTypes.STRING,
      allowNul: false,
      unique: true,
    },
  });

  Menu.associate = (models) => {
    // Meal.belongsToMany(models.Menus, { through: models.MenuMeals });
    Menu.belongsToMany(models.Meals, { as: 'meals', through: models.MenuMeals, foreignKey: 'menuId' });
  };

  return Menu;
}
