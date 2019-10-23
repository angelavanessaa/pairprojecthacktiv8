'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Cinema extends Model {}
  Cinema.init({
    name: DataTypes.STRING
  }, {sequelize})
  Cinema.associate = function(models) {
    // associations can be defined here
    Cinema.belongsToMany(models.Movie, {through: models.CinemaMovie})
  };
  return Cinema;
};