'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    userId: {
        type: DataTypes.INTEGER,
        allowNul: false        
    },
    paymentCardNo: {
        type: DataTypes.STRING,
        allowNul: false       
    }	
  });
  Customer.associate = function(models) {
    // associations can be defined here
    //Customer.belongsTo(models.User);
  };
  return Customer;
};