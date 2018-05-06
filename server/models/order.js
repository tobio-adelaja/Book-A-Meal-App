'use strict';

module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Orders', {
    date: {
        type: DataTypes.DATE,
        allowNul: false        
    },
    mealId: {
        type: DataTypes.INTEGER,
        allowNul: false       
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNul: false       
    },
    userId: {
        type: DataTypes.STRING,
        allowNul: false
    }
  });

  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};
