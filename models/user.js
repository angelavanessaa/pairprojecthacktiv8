'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  const hashPassword = require('../helpers/hashPassword');

  class User extends Model {}
  User.init({
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, { 
    hooks : {
    beforeCreate: function(user, options) {
      user.setDataValue('isAdmin', 'false');

      let hashedPass = hashPassword(user.password);
      user.setDataValue('password', hashedPass.hash);
      user.setDataValue('salt', hashedPass.salt);
    }
  },
  sequelize });

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};