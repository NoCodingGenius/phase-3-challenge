COPY grocery_items (name, price, section)
FROM '/Users/latoyawilliams/LGProjects/Phase-2/phase-3-challenge/part-2/grocerySeedData.csv' DELIMITER ',' CSV HEADER;

INSERT INTO shoppers (name)
  VALUES ('Sage'), ('Journey'), ('Willow'), ('Lyric'), ('Love');

INSERT INTO orders (shopper_id)
  VALUES ('1'), ('3'), ('5'), ('3'), ('4');

INSERT INTO order_items (item_id, order_id)
  VALUES ('2', '1'), ('4', '3'), ('6', '5'), ('2', '3'), ('8', '4');
