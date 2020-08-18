const express = require('express');
const router = express.Router();
const Toppings = require('../models/Topping');

/* GET meat toppings. */
router.get('/meat', (req, res) => {
    Toppings.findAll({
        where: {
            ismeat: 'TRUE'
        }
    })
        .then(toppings => {
            console.log("success");
            res.send(toppings);
        })
        .catch(err => console.log("Error: " + err));
});

/* GET non-meat toppings. */
router.get('/nonmeat', (req, res) => {
    Toppings.findAll({
        where: {
            ismeat: 'FALSE'
        }
    })
        .then(toppings => {
            console.log("success");
            res.send(toppings);
        })
        .catch(err => console.log("Error: " + err));
});

/* GET all toppings. */
router.get('/', (req, res) => {
    Toppings.findAll()
        .then(toppings => {
            console.log("success");
            res.send(toppings);
        })
        .catch(err => console.log("Error: " + err));
});

// POST to add hardcoded topping to DB example
// router.post('/add', (req, res) => {
//     const toppings = []
//     const data = {
//         topping: 'Pepperoni',
//         price: '0.50'
//     };

//     let { topping, price } = data;

//     Topping.create({
//         topping,
//         price
//     })
//         .then(topping => {
//             console.log("created");
//             res.sendStatus(200);
//         })
//         .catch(err => console.log("Error: " + err));
// });


/* Script to add all toppings in PGAdmin:
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Ham', '1.00', TRUE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Beef', '1.00', TRUE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Salami', '1.00', TRUE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Pepperoni', '1.00', TRUE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Italian Sausage', '1.00', TRUE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Premium Chicken', '1.00', TRUE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Bacon', '1.00', TRUE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Philly Steak', '1.00', TRUE);

INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Hot Buffalo Sauce', '0.50', FALSE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Jalapeno Peppers', '0.50', FALSE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Onions', '0.50', FALSE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Banana Peppers', '0.50', FALSE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Diced Tomatoes', '0.50', FALSE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Black Olives', '0.50', FALSE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Mushrooms', '0.50', FALSE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Pineapple', '0.50', FALSE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Shredded Provolone Cheese', '0.50', FALSE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Cheddar Cheese', '0.50', FALSE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Green Peppers', '0.50', FALSE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Spinach', '0.50', FALSE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Roasted Red Peppers', '0.50', FALSE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Feta Cheese', '0.50', FALSE);
INSERT INTO "toppings" ("name", "price", "ismeat") VALUES ('Shredded Parmesan Asiago', '0.50', FALSE);
*/
  
module.exports = router;