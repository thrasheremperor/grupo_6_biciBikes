'use strict';
const faker = require('faker'); 
const descuentos = ['5','10','15','20', '25', '40','30'];

const discounts = [];

for (let i = 0; i < descuentos.length; i++) {
  let nombre = {
    discount : descuentos[i],
    createdAt : new Date,
    updatedAt : new Date
  } 
  discounts.push(nombre)
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('discounts', discounts, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('discounts', null, {});
     
  }
};