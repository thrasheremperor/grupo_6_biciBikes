'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.category,{ //producto pertenece a una categoria
        as: 'product_category'
      })
      Product.hasMany(models.image,{
        as: 'product_image'
      })
      Product.belongsTo(models.make,{
        as: 'producto_make'
      })
      Product.belongsTo(models.model,{
        as: 'product_model'
      })
      Product.hasMany(models.color,{
        as : 'product_color'
      })
      Product.belongsTo(models.discount,{
        as: 'product_discount'
      })
      Product.belongsTo(models.section,{
        as: 'product_seccion'
      })
      Product.belongsToMany(models.User,{
        as : 'productSelec',
        through : 'shopping',
        foreignKey : 'productId',
        otherKey: 'userId'
      })
    }
  };
  Product.init({
    name: DataTypes.STRING,
    makeId: DataTypes.INTEGER,
    modelId: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    discountId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER,
    sectionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};