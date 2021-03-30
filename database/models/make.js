'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class make extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      make.hasMany(models.Product,{
        as: 'make_product'
      })
    }
  };
  make.init({
    make: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'make',
  });
  return make;
};