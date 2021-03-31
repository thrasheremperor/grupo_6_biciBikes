'use strict';

const faker = require('faker');
const bcrypt = require('bcrypt');

const productos= [];

for (let index = 0; index < 30; index++) {
  
  const producto = {
    
    createdAt : new Date(),
    updatedAt: new Date()
  }
  productos.push(producto)
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Products',productos,{});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Products', null, {});
  }
};