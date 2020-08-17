const Sequelize = require('sequelize');

//create db connection
module.exports = new Sequelize('teleflex-pizza', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});