'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      section.hasMany(models.Product,{
        as:'seccion_products'
      })
    }
  };
  section.init({
    sections: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'section',
  });
  return section;
};