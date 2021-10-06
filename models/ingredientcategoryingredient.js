'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IngredientCategoryIngredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Ingredient);
      this.belongsTo(models.IngredientCategory);
    }
  };
  IngredientCategoryIngredient.init({
    ingredient_category_id: DataTypes.INTEGER,
    ingredient_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'IngredientCategoryIngredient',
  });
  return IngredientCategoryIngredient;
};