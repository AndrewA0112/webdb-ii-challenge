const knex = require('knex');

const knexFile = require('../knexfile.js');

// client > api > knex > driver > db
const knexConfig = knexFile.development

module.exports = knex(knexConfig);