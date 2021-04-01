'use strict';

const descuento = ['20'];

const discounts = [];

descuento.forEach(discount => {
  const discountos ={
    discount,
    createdAt : new Date(),
    updatedAt: new Date()
  }
  discounts.push(discountos)
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