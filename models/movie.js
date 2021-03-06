'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Movie extends Model{
    getTheatre() {
      return 'Theatre ' + this.cinemaNumber;
    }
  }
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
    Movie.belongsToMany(models.User, {through: models.Transaction});
  };
  return Movie;
};