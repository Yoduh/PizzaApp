const Sequelize = require('sequelize');
const db = require('../config/database');

const Topping = db.define('topping', {
    topping: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.NUMBER
    },
    isMeat: {
        type: Sequelize.BOOLEAN
    }
});

module.exports = Topping;