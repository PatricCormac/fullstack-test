const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING}
})

const PhoneBook = sequelize.define('phone_book', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  phone_number: {type: DataTypes.STRING, unique: true, allowNull: false}
})

User.hasOne(PhoneBook)
User.belongsTo(User)

module.exports = {
  User, PhoneBook
}