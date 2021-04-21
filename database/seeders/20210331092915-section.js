'use strict';

const faker = require('faker'); //para poner datos falsos

const sections = [...Array(30)].map(secciones =>({
  sections: faker.name.firstName(),
  createdAt : new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     //Add seed commands here.
    
     //Example:
     await queryInterface.bulkInsert('sections', sections, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    //Add commands to revert seed here.
    
    //Example:
    await queryInterface.bulkDelete('sections', null, {});
    
  }
};
