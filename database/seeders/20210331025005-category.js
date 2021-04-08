'use strict';

const faker = require('faker'); //para poner datos falsos
const categorias1 = ['bmx',"mtb","ciudad","plegable","electrica","kids"]
const categories = [];

for (let i = 0; i < categorias1.length; i++) {
  let subcategoria = {
    category : categorias1[i],
    createdAt : new Date,
    updatedAt : new Date
  } 
  categories.push(subcategoria)
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     //Add seed commands here.
    
     //Example:
     await queryInterface.bulkInsert('categories', categories, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    //Add commands to revert seed here.
    
    //Example:
    await queryInterface.bulkDelete('categories', null, {});
    
  }
};
