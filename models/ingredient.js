'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.StepIngredients);
      this.belongsToMany(model.IngredientCategory, {through: 'IngredientCategoryIngredients', foreignKey: 'ingredient_id'});
    }
  };
  Ingredient.init({
    name: DataTypes.STRING,
    color: DataTypes.INTEGER,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};