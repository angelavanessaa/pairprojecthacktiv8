'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cinema = sequelize.define('Cinema', {
    name: DataTypes.STRING
  }, {});
  Cinema.associate = function(models) {
    // associations can be defined here
  };
  return Cinema;
};