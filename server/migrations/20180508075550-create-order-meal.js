module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OrderMeals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Orders',
          ondelete: 'CASCADE',
          key: 'id',
          as: 'orderId',
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
