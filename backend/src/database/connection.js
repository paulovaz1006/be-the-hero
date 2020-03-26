const knex = require('knex');
const configuraton = require('../../knexfile');

const connection = knex(configuraton.development);

module.exports = connection;