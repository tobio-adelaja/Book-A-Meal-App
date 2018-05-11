module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MenuMeals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      menuId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Menus',
          ondelete: 'CASCADE',
          key: 'id',
          as: 'menuId',
        },
      },
      mealId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Meals',
          ondelete: 'CASCADE',
          key: 'id',
          as: 'mealId',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface) => { return queryInterface.dropTable('Orders'); },
};
