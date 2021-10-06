'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeCategoryRecipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.RecipeCategory);
      this.belongsTo(models.Recipe);
    }
  };
  RecipeCategoryRecipe.init({
    recipe_category_id: DataTypes.INTEGER,
    recipe_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RecipeCategoryRecipe',
  });
  return RecipeCategoryRecipe;
};