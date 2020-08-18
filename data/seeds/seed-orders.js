
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {id: 1, cost: '29.40', customer_id: '-1', order: [{'toppings':['Mushrooms','Black Olives','Diced Tomatoes','Banana Peppers'],'price':10.99,'size':'Medium'},{'toppings':['Italian Sausage','Premium Chicken','Roasted Red Peppers','Banana Peppers','Diced Tomatoes'],'price':16.490000000000002,'size':'Super'}]},
        {id: 2, cost: '27.80', customer_id: '-1', order: [{'toppings':['Salami','Banana Peppers'],'price':14.49,'size':'Super'},{'toppings':['Salami','Onions'],'price':11.49,'size':'Large'}]},
        {id: 3, cost: '45.98', customer_id: '1138', order: [{'toppings':['Mushrooms','Black Olives','Diced Tomatoes','Italian Sausage','Pepperoni'],'price':13.49,'size':'Large'},{'toppings':['Pepperoni','Premium Chicken','Onions','Banana Peppers'],'price':11.99,'size':'Medium'},{'toppings':['Ham','Beef','Salami','Onions','Banana Peppers','Diced Tomatoes'],'price':17.490000000000002,'size':'Super'}]},
        {id: 4, cost: '19.77', customer_id: '1138', order: [{'toppings':['Ham'],'price':8.99,'size':'Small'},{'toppings':['Pineapple'],'price':9.49,'size':'Medium'}]},
        {id: 5, cost: '15.50', customer_id: '3199', order: [{'toppings':['Salami','Pepperoni','Onions','Banana Peppers','Roasted Red Peppers','Spinach','Shredded Provolone Cheese'],'price':14.49,'size':'Large'}]},
        {id: 6, cost: '54.00', customer_id: '3199', order: [{'toppings':['Ham','Beef','Onions','Jalapeno Peppers','Banana Peppers','Feta Cheese','Roasted Red Peppers','Mushrooms','Cheddar Cheese'],'price':18.490000000000002,'size':'Super'},{'toppings':['Premium Chicken','Black Olives','Onions','Roasted Red Peppers','Green Peppers','Beef','Pineapple','Shredded Provolone Cheese','Shredded Parmesan Asiago','Banana Peppers','Pepperoni','Italian Sausage','Jalapeno Peppers','Hot Buffalo Sauce','Feta Cheese'],'price':22.490000000000002,'size':'Super'},{'toppings':['Ham','Pineapple'],'price':9.49,'size':'Small'}]},
        {id: 7, cost: '46.50', customer_id: '-1', order: [{'toppings':['Beef'],'price':8.99,'size':'Small'},{'toppings':['Banana Peppers'],'price':9.49,'size':'Medium'},{'toppings':['Black Olives'],'price':10.49,'size':'Large'},{'toppings':['Bacon','Pineapple'],'price':14.49,'size':'Super'}]},
        {id: 8, cost: '11.22', customer_id: '1138', order: [{'toppings':['Pineapple'],'price':10.49,'size':'Large'}]},
        {id: 9, cost: '22.98', customer_id: '1138', order: [{'toppings':['Onions','Salami'],'price':11.49,'size':'Large'},{'toppings':['Pepperoni'],'price':9.99,'size':'Medium'}]},
      ]);
    })
    .then(function () {
      return knex.raw('ALTER SEQUENCE orders_id_seq RESTART WITH 10');
    });
};