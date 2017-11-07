'use strict'

const controller = require('lib/wiring/controller')

const index = (req, res) => {
  const policy = process.env.FILESTACK_POLICY
  const signature = process.env.FILESTACK_SIGNATURE
  const api = process.env.FILESTACK_API
  res.json({
    // api,
    policy,
    signature
  })
}

module.exports = controller({
  index
})
