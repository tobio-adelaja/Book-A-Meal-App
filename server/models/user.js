export default function (sequelize, DataTypes) {
  const User = sequelize.define('Users', {
    fullName: {
      type: DataTypes.STRING,
      allowNul: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNul: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNul: false,
    },
    handle: {
      type: DataTypes.STRING,
      allowNul: false,
    },
    role: {
      type: DataTypes.ENUM('Customer', 'Caterer'),
      allowNul: false,
    },
  });
  return User;
}
