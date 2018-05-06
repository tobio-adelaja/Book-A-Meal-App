'use strict';

module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menus', {
    date: {
        type: DataTypes.DATE,
        allowNul: false        
    },
    mealId: {
        type: DataTypes.INTEGER,
        allowNul: false       
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNul: false
    }
  });

  Menu.associate = function(models) {
    // associations can be defined here
  };
  return Menu;
};
