
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('toppings').del()
    .then(function () {
      // Inserts seed entries
      return knex('toppings').insert([
        {id: 1, name: 'Ham', price: '1.00', ismeat: 'TRUE'},
        {id: 2, name: 'Beef', price: '1.00', ismeat: 'TRUE'},
        {id: 3, name: 'Salami', price: '1.00', ismeat: 'TRUE'},
        {id: 4, name: 'Pepperoni', price: '1.00', ismeat: 'TRUE'},
        {id: 5, name: 'Italian Sausage', price: '1.00', ismeat: 'TRUE'},
        {id: 6, name: 'Premium Chicken', price: '1.00', ismeat: 'TRUE'},
        {id: 7, name: 'Bacon', price: '1.00', ismeat: 'TRUE'},
        {id: 8, name: 'Philly Steak', price: '1.00', ismeat: 'TRUE'},
        
        {id: 9, name: 'Hot Buffalo Sauce', price: '0.50', ismeat: 'FALSE'},
        {id: 10, name: 'Jalapeno Peppers', price: '0.50', ismeat: 'FALSE'},
        {id: 11, name: 'Onions', price: '0.50', ismeat: 'FALSE'},
        {id: 12, name: 'Banana Peppers', price: '0.50', ismeat: 'FALSE'},
        {id: 13, name: 'Diced Tomatoes', price: '0.50', ismeat: 'FALSE'},
        {id: 14, name: 'Black Olives', price: '0.50', ismeat: 'FALSE'},
        {id: 15, name: 'Mushrooms', price: '0.50', ismeat: 'FALSE'},
        {id: 16, name: 'Pineapple', price: '0.50', ismeat: 'FALSE'},
        {id: 17, name: 'Shredded Provolone Cheese', price: '0.50', ismeat: 'FALSE'},
        {id: 18, name: 'Cheddar Cheese', price: '0.50', ismeat: 'FALSE'},
        {id: 19, name: 'Green Peppers', price: '0.50', ismeat: 'FALSE'},
        {id: 20, name: 'Spinach', price: '0.50', ismeat: 'FALSE'},
        {id: 21, name: 'Roasted Red Peppers', price: '0.50', ismeat: 'FALSE'},
        {id: 22, name: 'Feta Cheese', price: '0.50', ismeat: 'FALSE'},
        {id: 23, name: 'Shredded Parmesan Asiago', price: '0.50', ismeat: 'FALSE'},
      ]);
    })
    .then(function () {
      return knex.raw('ALTER SEQUENCE toppings_id_seq RESTART WITH 5');
    });
};
