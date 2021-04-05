'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class model extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      model.hasMany(models.Product,{
        as : 'model_product',
        foreignKey : 'modelId',
      })
    }
  };
  model.init({
    model: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'model',
  });
  return model;
};