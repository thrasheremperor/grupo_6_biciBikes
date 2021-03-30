'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      makeId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tablaName: 'makes'
          },
          key: 'id'
        }
      },
      modelId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tablaName: 'models'
          },
          key: 'id'
        }
      },
      colorId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tablaName: 'colors'
          },
          key: 'id'
        }
      },
      price: {
        type: Sequelize.DECIMAL
      },
      description: {
        type: Sequelize.STRING
      },
      discountId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tablaName: 'discounts'
          },
          key: 'id'
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tablaName: 'categories'
          },
          key: 'id'
        }
      },
      imageId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tablaName: 'images'
          },
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};