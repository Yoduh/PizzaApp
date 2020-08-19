const Sequelize = require('sequelize');

//create db connection
module.exports = new Sequelize(
    process.env.DB_NAME || 'pizza-orders', // DB name
    process.env.DB_USER || 'postgres',     // DB user
    process.env.DB_PASSWORD || 'postgres',     // DB password
    {
        host: process.env.DB_URL || 'localhost',
        dialect: 'postgres'
    }
);