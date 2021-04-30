const fs = require('fs');

module.exports = {
  development: {
    username: 'luke',
    password: 'cassette',
    database: 'toca.bookings',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      connectTimeout: 60000
    }
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      connectTimeout: 60000
    }
  }
};