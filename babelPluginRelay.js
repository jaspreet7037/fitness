var babelRelayPlugin = require('babel-relay-plugin')
var schemaData = require('./fitnessSchema.json').data
var plugin = babelRelayPlugin(schemaData)

module.exports = plugin