require('dotenv').config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DBNAME } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DBNAME,
    host: DB_HOST,
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
