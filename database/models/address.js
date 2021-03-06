'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     /* address.belongsTo(models.User,{
        as:'address_user',
        foreignKey : 'userId',
      })*/
      
    }
  };
  address.init({
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'address',
  });
  return address;
};