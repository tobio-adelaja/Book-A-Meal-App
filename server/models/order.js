export default function (sequelize, DataTypes) {
  const Order = sequelize.define('Orders', {
    date: {
      type: DataTypes.DATE,
      allowNul: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNul: false,
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNul: false,
    },
  });

  Order.associate = (models) => {
    // Meal.belongsToMany(models.Menus, { through: models.MenuMeals });
    Order.belongsToMany(models.Meals, { as: 'meals', through: models.OrderMeals, foreignKey: 'orderId' });
  };

  return Order;
}
