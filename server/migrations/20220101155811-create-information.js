'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('information', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.STRING
      },
      end_date: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
    
    }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('information');
  }
};