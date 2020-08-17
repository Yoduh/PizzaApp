const Sequelize = require('sequelize');
const db = require('../config/database');

const Size = db.define('size', {
    size: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.NUMBER
    }
});

module.exports = Size;