'use strict';

const faker = require('faker'); //para poner datos falsos

const images = [...Array(30)].map(imagenes =>({
  image: faker.image.image(),
  createdAt : new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     //Add seed commands here.
    
     //Example:
     await queryInterface.bulkInsert('images', images, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    //Add commands to revert seed here.
    
    //Example:
    await queryInterface.bulkDelete('images', null, {});
    
  }
};
