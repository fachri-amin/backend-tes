'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IngredientCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Ingredient, {through: 'IngredientCategoryIngredients', foreignKey: 'ingredient_category_id'});
      this.hasMany(models.IngredientCategory, {foreignKey: 'parent_id', as: 'sub_ingredient_category'})
    }
  };
  IngredientCategory.init({
    parent_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'IngredientCategory',
  });
  return IngredientCategory;
};