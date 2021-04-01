'use strict';

const colores = ['amarillo'];

const colors = [];

colores.forEach(color => {
  const colorr ={
    color,
    createdAt : new Date(),
    updatedAt: new Date()
  }
  colors.push(colorr)
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
   await queryInterface.bulkInsert('colors',colors, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('colors', null, {});

  }
};