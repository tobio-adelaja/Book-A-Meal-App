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
    userId: {
      type: DataTypes.INTEGER,
      allowNul: false,
    },
  });
  return Meal;
}
