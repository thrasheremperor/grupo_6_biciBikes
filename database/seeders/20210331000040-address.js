'use strict';

const faker = require('faker'); //para poner datos falsos

const addresses = [...Array(30)].map(elemet =>({
  street : faker.address.streetName(),
  number : faker.random.number(9999),
  city: faker.address.city(),
  state: faker.address.state(),
  zipCode : faker.address.zipCode(),
  createdAt : new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     //Add seed commands here.
    
     //Example:
     await queryInterface.bulkInsert('addresses', addresses, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    //Add commands to revert seed here.
    
    //Example:
    await queryInterface.bulkDelete('addresses', null, {});
    
  }
};
