const db = require('./databaseConnection');

const queries = {
  productList: function (section) {
    return db.any(`SELECT grocery_items.name AS product_name, grocery_items.section
      FROM grocery_items
        WHERE section = $1`,
      [section]);
  },
  shopperOrders: function (id) {
    return db.any(`SELECT orders.id AS order_id, SUM(CAST(grocery_items.price AS DECIMAL)) AS total_cost
      FROM orders
        INNER JOIN orders_items
          ON orders_items.orders_id = orders_id
        INNER JOIN grocery_items
          ON orders_items.item_id = grocery_items
        WHERE shopper_id =$1
        GROUP BY orders.id`,
      [id]);
  },
  realShoppers: function () {
    return db.any(`SELECT shoppers.name AS shopper_name, COUNT(CAST(orders.id AS INT)) AS number_of_orders
      FROM shoppers
        INNER JOIN orders
          ON shoppers.id = orders.shopper_id
        WHERE orders.id >=1
        GROUP BY shoppers.name`);
  }
};
