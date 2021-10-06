'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StepIngredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Recipe);
      this.belongsTo(models.Step);
      this.belongsTo(models.Ingredient);
    }
  };
  StepIngredients.init({
    recipe_id: DataTypes.INTEGER,
    ingredient_id: DataTypes.INTEGER,
    step_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    unit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StepIngredients',
  });
  return StepIngredients;
};