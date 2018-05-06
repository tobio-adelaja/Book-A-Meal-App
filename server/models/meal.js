'use strict';

module.exports = (sequelize, DataTypes) => {
  var Meal = sequelize.define('Meals', {
    name: {
        type: DataTypes.STRING,
        allowNul: false        
    },
    price: {
        type: DataTypes.INTEGER,
        allowNul: false       
    },
    userId: {
        type: DataTypes.STRING,
        allowNul: false
    }
  });

  Meal.associate = function(models) {
    // associations can be defined here
  };
  return Meal;
};
