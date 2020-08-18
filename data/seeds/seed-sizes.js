
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sizes').del()
    .then(function () {
      // Inserts seed entries
      return knex('sizes').insert([
        {id: 1, name: 'Small', price: '7.99'},
        {id: 2, name: 'Medium', price: '8.99'},
        {id: 3, name: 'Large', price: '9.99'},
        {id: 4, name: 'Super', price: '12.99'},
      ]);
    })
    .then(function () {
      return knex.raw('ALTER SEQUENCE sizes_id_seq RESTART WITH 5');
    });
};