'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.RecipeCategory, {through: 'RecipeCategoryRecipes', foreignKey: 'recipe_id'});
      this.belongsTo(models.User, {foreignKey: 'author_id', as: 'author'});
    }
  };
  Recipe.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};