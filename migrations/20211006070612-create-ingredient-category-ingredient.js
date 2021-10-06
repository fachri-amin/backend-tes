'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('IngredientCategoryIngredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ingredient_category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'IngredientCategories',
          key: 'id'
        }
      },
      ingredient_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Ingredients',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('IngredientCategoryIngredients');
  }
};