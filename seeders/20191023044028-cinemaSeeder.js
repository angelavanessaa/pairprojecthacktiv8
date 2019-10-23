'use strict';
const Cinema = [
  {
    name: 'Cinema 1',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Cinema 2',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Cinema 3',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Cinema 4',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Cinema 5',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cinemas', Cinema)
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
