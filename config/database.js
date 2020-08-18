const Sequelize = require('sequelize');

//create db connection
module.exports = new Sequelize('pizza-orders', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});