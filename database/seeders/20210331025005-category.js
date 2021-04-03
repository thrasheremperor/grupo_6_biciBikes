'use strict';

const faker = require('faker'); //para poner datos falsos

const categories = [...Array(30)].map(categorys =>({
  category :faker.name.findName(),
  createdAt : new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     //Add seed commands here.
    
     //Example:
     await queryInterface.bulkInsert('categories', categories, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    //Add commands to revert seed here.
    
    //Example:
    await queryInterface.bulkDelete('categories', null, {});
    
  }
};
