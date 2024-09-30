// models/address.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Address = sequelize.define('Address', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
}, {
  timestamps: false,
});

// Establishing the relationship
User.hasMany(Address, { foreignKey: 'userId' });
Address.belongsTo(User, { foreignKey: 'userId' });

module.exports = Address;

