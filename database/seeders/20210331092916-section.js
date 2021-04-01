'use strict';

const secciones = ['Now','Popular','visited'];

const sectiones = [];

secciones.forEach(sections => {
  const seccion ={
    sections,
    createdAt : new Date(),
    updatedAt: new Date()
  }
  sectiones.push(seccion)
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
   await queryInterface.bulkInsert('sections',sectiones, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('sections', null, {});

  }
};