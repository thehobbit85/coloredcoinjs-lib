module.exports.Interface = require('./interface')
module.exports._AbstractSync = require('./abstractsync')
module.exports._AbstractSQL = require('./abstractsql')

var storages = {
  Memory: require('./memory'),
  SQLite: require('./sqlite'),
  WebSQL: require('./websql'),
  IndexedDB: require('./indexeddb'),
  LocalStorage: require('./localstorage')
}

Object.keys(storages).forEach(function (name) {
  module.exports[name] = storages[name]
})

module.exports.getAvailableStorages = function () {
  return storages.filter(function (cls) {
    return cls.isAvailable()
  })
}