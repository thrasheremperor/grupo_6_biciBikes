'use strict';

const faker = require('faker');
const bcrypt = require('bcrypt');

const users= [];

for (let index = 0; index < 30; index++) {
  
  const user = {
    name: faker.name.firstName(),
    lastName : faker.name.lastName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync('123123',10),
    password2: bcrypt.hashSync('123123',10),
    birthday: faker.date.past(),
    avatar: faker.image.avatar(),
    addressId: faker.random.number({min:1, max:30}),
    createdAt : new Date(),
    updatedAt: new Date()
  }
  users.push(user)
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
     await queryInterface.bulkInsert('Users',users,{});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};