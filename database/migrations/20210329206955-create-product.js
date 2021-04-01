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
            tableName: 'makes'
          },
          key: 'id'
        }
      },
      modelId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName: 'models'
          },
          key: 'id'
        }
      },
      colorId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName: 'colors'
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
            tableName: 'discounts'
          },
          key: 'id'
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName: 'categories'
          },
          key: 'id'
        }
      },
      imageId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName: 'images'
          },
          key: 'id'
        }
      },
      sectionId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName: 'sections'
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