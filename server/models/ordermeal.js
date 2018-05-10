export default function (sequelize, DataTypes) {
  const OrderMeal = sequelize.define('OrderMeals', {
    orderId: {
      type: DataTypes.INTEGER,
      allowNul: false,
    },
    mealId: {
      type: DataTypes.INTEGER,
      allowNul: false,
    },
  });
  return OrderMeal;
}
