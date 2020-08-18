const express = require('express');
const router = express.Router();
const Orders = require('../models/Order');

/* GET sizes. */
router.get('/', (req, res) => {
    Orders.findAll()
        .then(orders => {
            res.send(orders);
        })
        .catch(err => console.log("Error: " + err));
});

router.post('/add', (req, res) => {
    const { order, cost, customer_id } = req.body;
    console.log(order);
    console.log(cost);
    console.log(customer_id);
    Orders.create({
        order,
        cost,
        customer_id
    })
    .then(order => {
        console.log("success");
        res.send(order);
    })
    .catch(err => console.log("Error: " + err));
});

module.exports = router;