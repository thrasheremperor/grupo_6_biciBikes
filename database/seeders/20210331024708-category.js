'use strict';

const categorias = ['todoterreno'];

const categories = [];

categorias.forEach(category => {
  const categoria ={
    category,
    createdAt : new Date(),
    updatedAt: new Date()
  }
  categories.push(categoria)
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
   await queryInterface.bulkInsert('categories',categories, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('categories', null, {});

  }
};