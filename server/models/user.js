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
    admin: {
      type: DataTypes.BOOLEAN,
      allowNul: false,
    },
  });
  return User;
}
