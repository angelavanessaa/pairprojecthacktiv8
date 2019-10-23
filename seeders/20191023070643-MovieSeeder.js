'use strict';

let data = [
  {
    name : "Joker",
    tayang : "2019-10-02 07:00:00+07",
    maxtickets : 30,
    end : "2019-10-10 07:00:00+07",
    image : "https://i.redd.it/y5i92dqjh3m31.jpg",
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    name : "Maleficient",
    tayang : "2019-10-05 07:00:00+07",
    maxtickets : 50,
    end : "2019-10-12 07:00:00+07",
    image : "https://cdn.traileraddict.com/content/walt-disney-pictures/maleficent-14.jpg",
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    name : "Ready Player One",
    tayang : "2019-10-04 07:00:00+07",
    maxtickets : 40,
    end : "2019-10-18 07:00:00+07",
    image : "https://cdn.shopify.com/s/files/1/0747/3829/products/mL1483_1024x1024.jpg?v=1520444451",
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    name : "Avengers : Infinity War",
    tayang : "2019-10-04 07:00:00+07",
    maxtickets : 40,
    end : "2019-10-18 07:00:00+07",
    image : "https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._SL1500_.jpg",
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    name : "Walter Mitty",
    tayang : "2019-10-04 07:00:00+07",
    maxtickets : 40,
    end : "2019-10-18 07:00:00+07",
    image : "https://cdn3.movieweb.com/i/photo/MLI2b2YllbPYZCm0Z61tvKJbuhj4cY/798:50/default.jpg",
    createdAt : new Date(),
    updatedAt : new Date()
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', data);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
