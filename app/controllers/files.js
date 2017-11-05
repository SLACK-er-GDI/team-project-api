'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const File = models.file

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  File.find()
    .then(files => res.json({
      files: files.map((e) =>
        e.toJSON({ virtuals: true, user: req.user }))
    }))
    .catch(next)
}

const show = (req, res) => {
  res.json({
    file: req.file.toJSON({ virtuals: true, user: req.user })
  })
}

const create = (req, res, next) => {
  const file = Object.assign(req.body.file, {
    _owner: req.user._id
  })
  File.create(file)
    .then(file =>
      res.status(201)
        .json({
          file: file.toJSON({ virtuals: true, user: req.user })
        }))
    .catch(next)
}

const update = (req, res, next) => {
  delete req.body.file._owner  // disallow owner reassignment.

  req.file.update(req.body.file)
    .then(() => res.sendStatus(204))
    .catch(next)
}

const destroy = (req, res, next) => {
  req.file.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy
}, { before: [
  { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show'] },
  { method: setModel(File), only: ['show'] },
  { method: setModel(File, { forUser: true }), only: ['update', 'destroy'] }
]
})
