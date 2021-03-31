'use strict';

const modelos = ['niños'];

const models = [];

modelos.forEach(model => {
  const modelos ={
    model,
    createdAt : new Date(),
    updatedAt: new Date()
  }
  models.push(modelos)
});

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
   await queryInterface.bulkInsert('models',models, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('models', null, {});

  }
};