'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.belongsTo(models.Image,{
        as : 'image'
      })
    }
  };
  Category.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    imageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};