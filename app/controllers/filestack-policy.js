'use strict'

const controller = require('lib/wiring/controller')
const base64 = require('base64-url')
const crypto = require('crypto')
const moment = require('moment')

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

module.exports = controller({
  getPolicy
})
