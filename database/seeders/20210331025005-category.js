'use strict';
const faker = require('faker'); 
/*const categorias = ['MTB','Ciudad','Plegable','Kids', 'BMX', 'Ruta','Electrica'];

const categories = [];

for (let i = 0; i < categorias.length; i++) {
  let nombre = {
    category : categorias[i],
    createdAt : new Date,
    updatedAt : new Date
  } 
  categories.push(nombre)
};*/
const categories = [...Array(30)].map(categorys =>({
  category :faker.name.findName(),
  createdAt : new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('categories', categories, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('categories', null, {});
     
  }
};