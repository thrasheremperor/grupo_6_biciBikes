'use strict';
const faker = require('faker'); 
const colores = ['MTB','Ciudad','Plegable','Kids', 'BMX', 'Ruta','Electrica'];

const colors = [];

for (let i = 0; i < colores.length; i++) {
  let nombre = {
    color : colores[i],
    createdAt : new Date,
    updatedAt : new Date
  } 
  colors.push(nombre)
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('colors', colors, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('colors', null, {});
     
  }
};