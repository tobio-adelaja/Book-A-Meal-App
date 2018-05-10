export default function (sequelize, DataTypes) {
  const Order = sequelize.define('Orders', {
    date: {
      type: DataTypes.STRING,
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
    expiresAt: {
      type: DataTypes.DATE,
      allowNul: false,
    },
  });
  return Order;
}
