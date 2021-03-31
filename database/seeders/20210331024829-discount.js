'use strict';

const names = ['notebook', 'escritorio', '2en1', 'tablets', 'laptops'];

const discounts = [];

names.forEach(discount => {
  const discount ={
    discount,
    createdAt : new Date(),
    updatedAt: new Date()
  }
  discounts.push(discount)
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
   await queryInterface.bulkInsert('discounts',discounts, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('discounts', null, {});

  }
};