import db from './index';

module.exports = (sequelize, DataTypes) => {
  var Caterer = sequelize.define('Caterers', {
    userId: {
        type: DataTypes.INTEGER,
        allowNul: false        
    },
    companyName: {
        type: DataTypes.STRING,
        allowNul: false       
    },
  });

  //Caterer.BelongsTo(db.Users);
  return Caterer;
};