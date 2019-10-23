'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Movie extends Model{}
  Movie.init({
    name: DataTypes.STRING,
    tayang: DataTypes.DATE
  }, {sequelize})
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.belongsToMany(models.Cinema, {through: models.CinemaMovie})
  };
  return Movie;
};