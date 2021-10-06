'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('StepIngredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      recipe_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Recipes',
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
      step_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Steps',
          key: 'id'
        }
      },
      amount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      unit: {
        allowNull: false,
        type: Sequelize.STRING(25)
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
    await queryInterface.dropTable('StepIngredients');
  }
};