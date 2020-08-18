
exports.up = function(knex) {
    let createQuery = `CREATE TABLE sizes(
        id SERIAL PRIMARY KEY NOT NULL,
        name character varying(100) COLLATE pg_catalog."default",
        price numeric(4,2),
        "createdAt" timestamp without time zone DEFAULT clock_timestamp(),
        "updatedAt" timestamp without time zone DEFAULT clock_timestamp()
      )`
    return knex.raw(createQuery)
};

exports.down = function(knex) {
    let dropQuery = `DROP TABLE sizes`
    return knex.raw(dropQuery)
};

