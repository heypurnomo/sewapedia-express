const api = require('express').Router()
const v1 = require('./v1')

api.use('/api/v1', v1)

module.exports = api
