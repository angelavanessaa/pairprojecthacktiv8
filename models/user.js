'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  const bcrypt = require('../helpers/bcrypt');

  class User extends Model {}
  User.init({
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, { 
    hooks : {
    beforeCreate: function(user, options) {
      user.setDataValue('isAdmin', 'false');
      user.setDataValue('password', bcrypt.encrypt(user.password));
    }
  },
  sequelize });

  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Movie, {through: models.Transaction});
  };
  return User;
};