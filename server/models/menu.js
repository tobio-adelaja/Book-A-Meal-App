export default function (sequelize, DataTypes) {
  const Menu = sequelize.define('Menus', {
    date: {
      type: DataTypes.STRING,
      allowNul: false,
      unique: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNul: false,
    },
  });
  return Menu;
}