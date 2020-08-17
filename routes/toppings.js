const express = require('express');
const router = express.Router();
const Topping = require('../models/Topping');

/* GET meat toppings. */
router.get('/meat', (req, res) => {
    Topping.findAll({
        where: {
            isMeat: 'TRUE'
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
    Topping.findAll({
        where: {
            isMeat: 'FALSE'
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
    Topping.findAll({
        // where: {
        //     isMeat: 'FALSE'
        // }
    })
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
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Ham', '1.00', TRUE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Beef', '1.00', TRUE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Salami', '1.00', TRUE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Pepperoni', '1.00', TRUE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Italian Sausage', '1.00', TRUE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Premium Chicken', '1.00', TRUE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Bacon', '1.00', TRUE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Philly Steak', '1.00', TRUE);

INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Hot Buffalo Sauce', '0.50', FALSE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Jalapeno Peppers', '0.50', FALSE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Onions', '0.50', FALSE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Banana Peppers', '0.50', FALSE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Diced Tomatoes', '0.50', FALSE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Black Olives', '0.50', FALSE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Mushrooms', '0.50', FALSE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Pineapple', '0.50', FALSE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Shredded Provolone Cheese', '0.50', FALSE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Cheddar Cheese', '0.50', FALSE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Green Peppers', '0.50', FALSE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Spinach', '0.50', FALSE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Roasted Red Peppers', '0.50', FALSE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Feta Cheese', '0.50', FALSE);
INSERT INTO "toppings" ("topping", "price", "isMeat") VALUES ('Shredded Parmesan Asiago', '0.50', FALSE);
*/
  
module.exports = router;