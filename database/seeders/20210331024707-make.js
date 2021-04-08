'use strict';
const faker = require('faker'); 
const marcas = ['MTB','Ciudad','Plegable','Kids', 'BMX', 'Ruta','Electrica'];

const makes = [];

for (let i = 0; i < marcas.length; i++) {
  let nombre = {
    make : marcas[i],
    createdAt : new Date,
    updatedAt : new Date
  } 
  makes.push(nombre)
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('makes', makes, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('makes', null, {});
     
  }
};