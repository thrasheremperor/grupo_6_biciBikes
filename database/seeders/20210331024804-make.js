'use strict';

const marcas = ['notebook', 'escritorio', '2en1', 'tablets', 'laptops'];

const makes = [];

marcas.forEach(make => {
  const make ={
    make,
    createdAt : new Date(),
    updatedAt: new Date()
  }
  makes.push(make)
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
   await queryInterface.bulkInsert('makes',makes, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('makes', null, {});

  }
};