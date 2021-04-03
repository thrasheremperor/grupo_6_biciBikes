'use strict';

const faker = require('faker'); //para poner datos falsos

const makes = [...Array(30)].map(marcas =>({
  make : faker.name.firstName(),
  createdAt : new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     //Add seed commands here.
    
     //Example:
     await queryInterface.bulkInsert('makes', makes, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    //Add commands to revert seed here.
    
    //Example:
    await queryInterface.bulkDelete('makes', null, {});
    
  }
};
