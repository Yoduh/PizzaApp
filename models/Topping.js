const Sequelize = require('sequelize');
const db = require('../config/database');

const Topping = db.define('topping', {
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.NUMBER
    },
    ismeat: {
        type: Sequelize.BOOLEAN
    }
});

module.exports = Topping;