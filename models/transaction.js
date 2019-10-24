'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Transaction extends Model{}
  Transaction.init({
    MovieId: DataTypes.INTEGER,
    UserId : DataTypes.INTEGER,
    booking_code: DataTypes.STRING,
    seatNumber: DataTypes.STRING
  }, {sequelize})
  Transaction.associate = function(models) {
    // associations can be defined here
  };
  return Transaction;
};