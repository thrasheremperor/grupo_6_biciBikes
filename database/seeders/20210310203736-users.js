'use strict';

const faker = require('faker');
const bcrypt = require('bcrypt');
const users = [];

for (let index = 0; index < 10; index++) {
  const user = {
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    password: bcrypt.hashSync('123123', 12),
    email: faker.internet.email(),
    imageId: faker.random.image(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
  
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
