const faker = require('faker');
const bcrypt = require('bcrypt');
const users = [];

for (let index = 0; index < 10; index++) {
  const user = {
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    password: bcrypt.hashSync('123123', 12),
    email: faker.internet.email(),
    imageId: faker.random.image(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
  users.push(user)
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
