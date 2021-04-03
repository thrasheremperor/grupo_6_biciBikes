'use strict';

const faker = require('faker'); //para poner datos falsos

const colors = [...Array(30)].map(colores =>({
  color:faker.vehicle.color(),
  createdAt : new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     //Add seed commands here.
    
     //Example:
     await queryInterface.bulkInsert('colors', colors, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    //Add commands to revert seed here.
    
    //Example:
    await queryInterface.bulkDelete('colors', null, {});
    
  }
};
