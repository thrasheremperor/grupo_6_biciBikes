'use strict';

const faker = require('faker'); //para poner datos falsos

const discounts = [...Array(30)].map(descuento =>({
  discount:faker.random.number(),
  createdAt : new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     //Add seed commands here.
    
     //Example:
     await queryInterface.bulkInsert('discounts', discounts, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    //Add commands to revert seed here.
    
    //Example:
    await queryInterface.bulkDelete('discounts', null, {});
    
  }
};
