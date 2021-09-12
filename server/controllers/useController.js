const ApiError = require('../error/ApiError')

exports.registration = async function(req, res) {
  
}

exports.login = async function(req, res) {
  
}

exports.check = async function(req, res, next) {
  const { id } = req.query
  if(!id) {
    return next(ApiError.badRequest('not id'))
  }

  res.json(id)
}