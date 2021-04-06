'use strict';

const faker = require('faker');

const productos= [];

for (let index = 0; index < 30; index++) {
  
  const producto = {
    name: faker.commerce.productName(),
    makeId:faker.random.number({min:1, max:30}),
    modelId:faker.random.number({min:1, max:30}),
    colorId:faker.random.number({min:1, max:30}),
    price : faker.commerce.price(),
    description : faker.commerce.productDescription(),
    discountId: faker.random.number({min:1, max:30}),
    categoryId:faker.random.number({min:1, max:30}),
    imageId:faker.random.number({min:1, max:30}),
    sectionId :faker.random.number({min:1, max:3}),
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