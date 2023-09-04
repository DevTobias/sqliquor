CREATE TABLE IF NOT EXISTS `delivery` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `accepted` boolean NOT NULL
);

CREATE TABLE IF NOT EXISTS `ingredient_orders` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `delivered` boolean NOT NULL,
  `ordered_at` timestamp NOT NULL DEFAULT (NOW())
);

CREATE TABLE IF NOT EXISTS `stock` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `amount` integer NOT NULL
);

CREATE TABLE IF NOT EXISTS `cocktail` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `alcoholRating` integer NOT NULL
);

CREATE TABLE IF NOT EXISTS `dining_table` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `seats` integer NOT NULL
);

CREATE TABLE IF NOT EXISTS `customer` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `isInsideBar` boolean NOT NULL DEFAULT false
);

CREATE TABLE IF NOT EXISTS `employee` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `employedSince` timestamp NOT NULL DEFAULT (NOW()),
  `phone` varchar(50) NOT NULL,
  `salary` float NOT NULL,
  `occupation` varchar(50) NOT NULL,
  `workingHours` integer NOT NULL
);





CREATE TABLE IF NOT EXISTS `order` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `dining_table_id` integer NOT NULL,
  `employee_id` integer NOT NULL,
  FOREIGN KEY(`dining_table_id`) REFERENCES `dining_table` (`id`),
  FOREIGN KEY(`employee_id`) REFERENCES `employee` (`id`)
);

CREATE TABLE IF NOT EXISTS `customer_seating` (
  `customer_id` integer,
  `dining_table_id` integer,
  `isActive` boolean NOT NULL DEFAULT true,
  PRIMARY KEY (`customer_id`, `dining_table_id`),
  FOREIGN KEY(`dining_table_id`) REFERENCES `dining_table` (`id`),
  FOREIGN KEY(`customer_id`) REFERENCES `customer` (`id`)
);

CREATE TABLE IF NOT EXISTS `rating` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `rating` integer NOT NULL,
  `cocktail_id` integer NOT NULL,
  `customer_id` integer NOT NULL,
  FOREIGN KEY(`cocktail_id`) REFERENCES `cocktail` (`id`),
  FOREIGN KEY(`customer_id`) REFERENCES `customer` (`id`)
);

CREATE TABLE IF NOT EXISTS `ingredient` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `unit` ENUM ('g', 'ml', 'pcs') NOT NULL,
  `stock` integer NOT NULL,
  `real_stock_id` integer NOT NULL,
  FOREIGN KEY(`real_stock_id`) REFERENCES `stock` (`id`)
);






CREATE TABLE IF NOT EXISTS `delivery_details` (
  `delivery_id` integer,
  `ingredient_id` integer,
  `amount` integer NOT NULL,
  PRIMARY KEY (`delivery_id`, `ingredient_id`),
  FOREIGN KEY(`delivery_id`) REFERENCES `delivery` (`id`),
  FOREIGN KEY(`ingredient_id`) REFERENCES `ingredient` (`id`)
);

CREATE TABLE IF NOT EXISTS `market` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `price` float NOT NULL,
  `amount` float NOT NULL,
  `deliverTime` integer NOT NULL,
  `supplier` varchar(50) NOT NULL,
  `ingredient_id` integer NOT NULL,
  FOREIGN KEY(`ingredient_id`) REFERENCES `ingredient` (`id`)
);

CREATE TABLE IF NOT EXISTS `recipe_step` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  `cocktail_id` integer NOT NULL,
  FOREIGN KEY(`cocktail_id`) REFERENCES `cocktail` (`id`)
);

CREATE TABLE IF NOT EXISTS `cocktail_orders` (
  `order_id` integer,
  `cocktail_id` integer,
  PRIMARY KEY (`order_id`, `cocktail_id`),
  FOREIGN KEY(`order_id`) REFERENCES `order` (`id`),
  FOREIGN KEY(`cocktail_id`) REFERENCES `cocktail` (`id`)
);

CREATE TABLE IF NOT EXISTS `buys_from` (
  `market_id` integer,
  `ingredient_order_id` integer,
  PRIMARY KEY (`market_id`, `ingredient_order_id`),
  FOREIGN KEY(`market_id`) REFERENCES `market` (`id`),
  FOREIGN KEY(`ingredient_order_id`) REFERENCES `ingredient_orders` (`id`)
);

CREATE TABLE IF NOT EXISTS `cocktail_ingredients` (
  `cocktail_id` integer,
  `ingredient_id` integer,
  `amount` integer NOT NULL,
  PRIMARY KEY (`cocktail_id`, `ingredient_id`),
  FOREIGN KEY(`cocktail_id`) REFERENCES `cocktail` (`id`),
  FOREIGN KEY(`ingredient_id`) REFERENCES `ingredient` (`id`)
);
