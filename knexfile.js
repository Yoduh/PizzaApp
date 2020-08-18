// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_URL || 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'postgres',
      database: 'pizza-orders'
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  testing: {
    client: 'pg',
    connection: {
      host: process.env.DB_URL || 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'postgres',
      database: 'test-db'
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_URL || 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'postgres',
      database: 'production-db'
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

};
