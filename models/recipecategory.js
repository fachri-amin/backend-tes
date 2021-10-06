'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Recipe, {through: 'RecipeCategoryRecipes', foreignKey: 'recipe_category_id'});
      this.hasMany(models.RecipeCategory, {foreignKey: 'parent_id', as: 'sub_recipe_category'})
    }
  };
  RecipeCategory.init({
    parent_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RecipeCategory',
  });
  return RecipeCategory;
};