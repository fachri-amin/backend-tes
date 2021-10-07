'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Step extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasMany(models.StepIngredient);
      this.belongsTo(models.Recipe);
    }
  };
  Step.init({
    recipe_id: DataTypes.INTEGER,
    step_number: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    timer: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Step',
  });
  return Step;
};