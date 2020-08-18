const Sequelize = require('sequelize');
const db = require('../config/database');

const Order = db.define('order', {
    order: {
        type: Sequelize.ARRAY(Sequelize.JSON)
    },
    cost: {
        type: Sequelize.NUMBER
    },
    customer_id: {
        type: Sequelize.NUMBER
    }
});

module.exports = Order;