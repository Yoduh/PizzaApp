
exports.up = function(knex) {
    let createQuery = `CREATE TABLE orders(
        id SERIAL PRIMARY KEY NOT NULL,
        cost numeric(10,2),
        customer_id integer,
        "createdAt" timestamp without time zone DEFAULT clock_timestamp(),
        "updatedAt" timestamp without time zone DEFAULT clock_timestamp(),
        "order" json[]
      )`
    return knex.raw(createQuery)
};

exports.down = function(knex) {
    let dropQuery = `DROP TABLE orders`
    return knex.raw(dropQuery)
};

