'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class CinemaMovie extends Model{}
  CinemaMovie.init({
    CinemaId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    booking_code: DataTypes.INTEGER
  }, {sequelize})
  CinemaMovie.associate = function(models) {
    // associations can be defined here
  };
  return CinemaMovie;
};