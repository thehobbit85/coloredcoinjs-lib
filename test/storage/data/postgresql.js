/* global describe */
'use strict'

var cclib = require('../../../')

require('./implementation')({
  describe: describe,
  StorageCls: cclib.storage.data.PostgreSQL,
  storageOpts: require('../../config/postgresql.json')
})
