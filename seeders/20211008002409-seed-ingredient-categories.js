'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */ 
    await queryInterface.bulkInsert('IngredientCategories', [
      {
        name: 'Vegetables',
        description: 'fiber rich ingredient',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        parent_id: 1,
        name: 'Green Vegetables',
        description: 'fiber rich ingredient',
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {});
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
