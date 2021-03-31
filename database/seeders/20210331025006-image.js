'use strict';

const imagenes = ['notebook', 'escritorio', '2en1', 'tablets', 'laptops'];

const images = [];

imagenes.forEach(image => {
  const imagen ={
    image,
    createdAt : new Date(),
    updatedAt: new Date()
  }
  images.push(imagen)
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
   await queryInterface.bulkInsert('images',images, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('images', null, {});

  }
};