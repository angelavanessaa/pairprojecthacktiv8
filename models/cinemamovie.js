'use strict';
module.exports = (sequelize, DataTypes) => {
  const CinemaMovie = sequelize.define('CinemaMovie', {
    CinemaId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    booking_code: DataTypes.INTEGER
  }, {});
  CinemaMovie.associate = function(models) {
    // associations can be defined here
  };
  return CinemaMovie;
};