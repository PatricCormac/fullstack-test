const { PhoneBook } = require('../models/models')
const ApiError = require('../error/ApiError')
const { Sequelize } = require('sequelize')

exports.create = async function(req, res) {
  const { phoneNumber } = req.body
  const createdPhoneNumber = await PhoneBook.create({phone_number: phoneNumber})
  return res.json(createdPhoneNumber)
}

exports.remove = async function(req, res) {
  const { phoneNumber } = req.body
  await PhoneBook.destroy({
    where: {
      phone_number: phoneNumber
    }
  })

  const phoneBook = await PhoneBook.findAll()

  return res.json(phoneBook)
}

exports.getAll = async function(req, res) {
  const { phoneNumber } = req.body
  let phoneBook
  if (phoneNumber) {
    phoneBook = await PhoneBook.findAll({
      where: {
      phone_number: {
        [Sequelize.Op.iLike]: `%${phoneNumber}%`
      }
    }
  })
  }

  if (!phoneNumber) {
    phoneBook = await PhoneBook.findAll()
  }
  return res.json(phoneBook)
}