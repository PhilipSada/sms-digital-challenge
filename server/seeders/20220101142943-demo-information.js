'use strict';

const fs = require('fs');
let seedData = JSON.parse(fs.readFileSync('./data.json'));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here. */
     
    await queryInterface.bulkInsert('information', seedData, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
