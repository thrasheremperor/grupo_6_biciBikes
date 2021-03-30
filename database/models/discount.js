'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      discount.hasMany(models.Product,{
        as : 'discount_Product'
      })
    }
  };
  discount.init({
    discount: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'discount',
  });
  return discount;
};