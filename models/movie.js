'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    name: DataTypes.STRING,
    tayang: DataTypes.DATE
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};