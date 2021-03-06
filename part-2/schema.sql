DROP TABLE IF EXISTS grocery_items CASCADE;
DROP TABLE IF EXISTS shoppers CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS order_items CASCADE;

CREATE TABLE grocery_items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price TEXT NOT NULL,
  section TEXT NOT NULL
);

CREATE TABLE shoppers (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  shopper_id INTEGER REFERENCES shoppers(id)
);

CREATE TABLE order_items (
  item_id INTEGER REFERENCES grocery_items(id),
  order_id INTEGER REFERENCES orders(id)
);
