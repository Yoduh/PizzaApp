const express = require('express');
const router = express.Router();
const Sizes = require('../models/Size');

/* GET sizes. */
router.get('/', (req, res) => {
    Sizes.findAll()
        .then(sizes => {
            console.log("success");
            res.send(sizes);
        })
        .catch(err => console.log("Error: " + err));
});
  
/* Script to add all sizes in PGAdmin:
INSERT INTO "sizes" ("size", "price") VALUES ('Small', '7.99');
INSERT INTO "sizes" ("size", "price") VALUES ('Medium', '8.99');
INSERT INTO "sizes" ("size", "price") VALUES ('Large', '9.99');
INSERT INTO "sizes" ("size", "price") VALUES ('Super', '12.99');
*/
module.exports = router;
  