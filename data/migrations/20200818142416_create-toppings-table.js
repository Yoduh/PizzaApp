
exports.up = function(knex) {
    let createQuery = `CREATE TABLE toppings(
        id SERIAL PRIMARY KEY NOT NULL,
        name character varying(100) COLLATE pg_catalog."default",
        price numeric(4,2),
        ismeat boolean,
        "createdAt" timestamp without time zone DEFAULT clock_timestamp(),
        "updatedAt" timestamp without time zone DEFAULT clock_timestamp()
      )`
    return knex.raw(createQuery)
};

exports.down = function(knex) {
    let dropQuery = `DROP TABLE toppings`
    return knex.raw(dropQuery)
};

