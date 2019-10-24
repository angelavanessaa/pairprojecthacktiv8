'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Movie extends Model{}
  Movie.init({
    name: DataTypes.STRING,
    tayang: DataTypes.DATE,
    image: DataTypes.STRING,
    maxtickets: DataTypes.INTEGER,
    end: DataTypes.DATE,
    cinemaNumber: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {sequelize})
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};