const ApiError = require('../error/ApiError')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User } = require('../models/models')

const generateJwt = (id, email) => {
  return jwt.sign(
    { id, email },
    process.env.SECRET_KEY,
    { expiresIn: '24h' }
  )
}

exports.registration = async function(req, res, next) {
  const { email, password } = req.body
  if (!email || !password) {
    return next(ApiError.badRequest('Некорректные введенные данные'))
  }

  const candidate = await User.findOne({where: {email}})
  if (candidate) {
    return next(ApiError.badRequest('Пользователь существует'))
  }

  const hashPassword = await bcrypt.hash(password, 5)
  const user = await User.create({ email, password: hashPassword })
  const token = generateJwt(user.id, user.email)

  return res.json({ token })
}

exports.login = async function(req, res, next) {
  const { email, password } = req.body
  const user = await User.findOne({ where: { email } })
  if (!user) {
    return next(ApiError.badRequest('Пользователь не найден'))
  }

  let comparePassword = bcrypt.compareSync(password, user.password)
  if (!comparePassword) {
    return next(ApiError.badRequest('Указан не верный пароль'))
  }

  const token = generateJwt(user.id, user.email)
  return res.json({token})
}

exports.check = async function(req, res, next) {
  const token = generateJwt(req.user.id, req.user.email)
  return res.json({ token })
}