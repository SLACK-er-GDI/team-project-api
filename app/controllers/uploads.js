'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Upload = models.uploads

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')
const base64 = require('base64-url')
const crypto = require('crypto')
const moment = require('moment')

const index = (req, res, next) => {
  Upload.find()
    .then(upload => res.json({
      upload: upload.map((e) =>
        e.toJSON({ virtuals: true, user: req.user }))
    }))
    .catch(next)
}

const show = (req, res) => {
  res.json({
    upload: req.upload.toJSON({ virtuals: true, user: req.user })
  })
}

const getPolicy = (req, res) => {
  const policy = {
    call: [ 'pick', 'list' ],
    expiry: moment().add(1, 'hour').valueOf()
  }
  const policyString = JSON.stringify(policy)
  const encodedPolicy = base64.encode(policyString)
  const secret = ''
  const signature = crypto.createHmac('sha256', secret).update(secret).digest('hex')
  res.json({
    policy: encodedPolicy,
    signature
  })
}

const create = (req, res, next) => {
  const upload = Object.assign(req.body.upload, {
    _owner: req.user._id
  })
  Upload.create(upload)
    .then(upload =>
      res.status(201)
        .json({
          upload: upload.toJSON({ virtuals: true, user: req.user })
        }))
    .catch(next)
}

const update = (req, res, next) => {
  delete req.body.upload._owner  // disallow owner reassignment.

  req.upload.update(req.body.upload)
    .then(() => res.sendStatus(204))
    .catch(next)
}

const destroy = (req, res, next) => {
  req.upload.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  getPolicy,
  index,
  show,
  create,
  update,
  destroy
}, { before: [
  { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show'] },
  { method: setModel(Upload), only: ['show'] },
  { method: setModel(Upload, { forUser: true }), only: ['update', 'destroy'] }
]
})
