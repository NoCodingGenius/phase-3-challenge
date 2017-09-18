COPY grocery_items (name, price, section)
FROM '/Users/latoyawilliams/LGProjects/Phase-2/phase-3-challenge/part-2/grocerySeedData.csv' DELIMITER ',' CSV HEADER;

INSERT INTO shoppers (name)
  VALUES ('Sage'), ('Journey'), ('Willow'), ('Lyric'), ('Love');

INSERT INTO orders (shopper_id)
  VALUES ('1'), ('3'), ('5'), ('3'), ('4');
