const pgPromise = require('pg-promise')();

const connection = {
  host: 'localhost',
  port: '5432',
  database: 'grocery_store'
};

const db = pgPromise(connection);

module.exports = db;
