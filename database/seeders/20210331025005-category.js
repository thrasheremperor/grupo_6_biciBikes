'use strict';

const categorias = ['MTB','Ciudad','Plegable','Kids', 'BMX', 'Ruta','Electrica'];

const categories = [];

for (let i = 0; i < categorias.length; i++) {
  let nombre = {
    category : categorias[i],
    createdAt : new Date,
    updatedAt : new Date
  } 
  categories.push(nombre)
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('categories', categories, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('categories', null, {});
     
  }
};