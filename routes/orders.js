const express = require('express');
const router = express.Router();
const Orders = require('../models/Order');

/* GET customer orders */
router.get('/:customer_id', (req, res) => {
    Orders.findAll({
        where: {
            customer_id: req.params.customer_id
        }
        })
        .then(orders => {
            res.send(orders);
        })
        .catch(err => console.log("Error: " + err));
});

/* GET all orders (admin only) */
router.get('/', (req, res) => {
    Orders.findAll()
        .then(orders => {
            res.send(orders);
        })
        .catch(err => console.log("Error: " + err));
});

/* POST new order */
router.post('/', (req, res) => {
    const { order, cost, customer_id } = req.body;
    Orders.create({
        order,
        cost,
        customer_id
    })
    .then(order => {
        console.log("success");
        res.send(order);
    })
    .catch(err => console.log("*Error: " + err));
});

/* DELETE existing order */
router.delete('/:id', (req, res) => {
    Orders.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(rowsDestroyed => {
        console.log("success");
        console.log(rowsDestroyed);
        res.sendStatus(200);
    })
    .catch(err => console.log("Error: " + err));
})

module.exports = router;