'use strict';

const faker = require('faker'); //para poner datos falsos

const models = [...Array(30)].map(modelo =>({
  model: faker.vehicle.model(),
  createdAt : new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     //Add seed commands here.
    
     //Example:
     await queryInterface.bulkInsert('models', models, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    //Add commands to revert seed here.
    
    //Example:
    await queryInterface.bulkDelete('models', null, {});
    
  }
};
