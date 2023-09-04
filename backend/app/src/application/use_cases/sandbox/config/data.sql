INSERT INTO `stock` (`amount`) VALUES
  (30), (200), (300), (5000), (5000), (500), (2000),
  (2000), (200), (30), (50), (180), (500), (1000),
  (1000), (980), (380), (500), (480);

INSERT INTO `cocktail` (`name`, `alcoholRating`) VALUES
  ('Virgin Mojito', 0), ('Orange Julius', 1), ('Pineapple Gingerale Smoothie', 0),
  ('Cranberry Spritzer', 1), ('Shirley Temple', 0), ('Lemonade', 0),
  ('Alkoholfreier Sangria', 1), ('Piña Colada', 3), ('Strawberry Daiquiri', 2),
  ('Margarita', 3), ('Cosmopolitan', 3), ('Blue Lagoon', 2),
  ('Mai Tai', 4), ('Screwdriver', 2), ('Mojito', 3),
  ('Tequila Sunrise', 2), ('Old Fashioned', 4), ('Long Island Iced Tea', 5),
  ('Whiskey Sour', 4), ('Martini', 4);

INSERT INTO `dining_table` (`seats`) VALUES (2), (4), (6), (2), (8), (4), (6), (4), (3), (5);

INSERT INTO `customer` (`firstname`, `lastname`) VALUES
  ('Max', 'Mustermann'), ('Anna', 'Müller'), ('David', 'Schmidt'),
  ('Sarah', 'Wagner'), ('Michael', 'Koch'), ('Laura', 'Weber'),
  ('Daniel', 'Becker'), ('Sophia', 'Schneider'), ('Paul', 'Hofmann'),
  ('Emma', 'Schwarz'), ('Felix', 'Bauer'), ('Lena', 'Zimmermann'),
  ('Julian', 'Krüger'), ('Mia', 'Herrmann'), ('Simon', 'Schmitt'),
  ('Emily', 'Lange'), ('Nico', 'Schulz'), ('Lea', 'König'),
  ('Jonas', 'Fischer'), ('Hannah', 'Vogel'), ('Alexander', 'Hartmann'),
  ('Luisa', 'Jäger'), ('Elias', 'Graf'), ('Marie', 'Wolf'),
  ('Jan', 'Kaiser'), ('Clara', 'Richter'), ('Leon', 'Kuhn'),
  ('Isabella', 'Huber'), ('Noah', 'Beyer'), ('Johanna', 'Walter'),
  ('Benjamin', 'Mayer'), ('Amelie', 'Krause'), ('Luca', 'Frank'),
  ('Lara', 'Böhm'), ('Tim', 'Schuster'), ('Fiona', 'Lorenz'),
  ('Jakob', 'Ott'), ('Paula', 'Baumann'), ('Oskar', 'Pohl'),
  ('Carla', 'Roth'), ('Anton', 'Schubert');

INSERT INTO `employee` (`firstname`, `lastname`, `phone`, `salary`, `occupation`, `workingHours`) VALUES
  ('Max', 'Mustermann', '123-456-7890', 4500.00, 'Waiter', 40),
  ('Anna', 'Müller', '234-567-8901', 5200.00, 'Bartender', 35),
  ('David', 'Schmidt', '345-678-9012', 6000.00, 'Chef', 45),
  ('Sarah', 'Wagner', '456-789-0123', 4800.00, 'Waiter', 38),
  ('Michael', 'Koch', '567-890-1234', 5800.00, 'Manager', 40),
  ('Daniel', 'Becker', '789-012-3456', 4700.00, 'Waiter', 42),
  ('Sophia', 'Schneider', '890-123-4567', 5100.00, 'Bartender', 36),
  ('Emma', 'Schwarz', '012-345-6789', 4700.00, 'Waiter', 39),
  ('Felix', 'Bauer', '123-456-7890', 4900.00, 'Waiter', 40),
  ('Lena', 'Zimmermann', '234-567-8901', 4800.00, 'Bartender', 35);

INSERT INTO `ingredient` (`name`, `unit`, `stock`, `real_stock_id`) VALUES
  ('Limette', 'pcs', 30, 1), ('Minzblätter', 'g', 200, 2), ('Zucker', 'g', 300, 3), ('Sprudelwasser', 'ml', 5000, 4), ('Orangensaft', 'ml', 5000, 5),
  ('Ananas', 'g', 500, 6), ('Ingwerlimonade', 'ml', 2000, 7), ('Cranberrysaft', 'ml', 2000, 8), ('Kirsche', 'g', 200, 9), ('Zitrone', 'pcs', 30, 10),
  ('Orange', 'pcs', 50, 11), ('Erdbeeren', 'g', 180, 12), ('Kokosnusscreme', 'ml', 500, 13), ('Rum', 'ml', 1000, 14), ('Wodka', 'ml', 1000, 15),
  ('Tequila', 'ml', 980, 16), ('Grenadine', 'ml', 380, 17), ('Whiskey', 'ml', 500, 18), ('Martini Vermouth', 'ml', 480, 19);

INSERT INTO `market` (`price`, `amount`, `deliverTime`, `supplier`, `ingredient_id`) VALUES
  -- Limette
  (0.5, 1, 1, 'Frische Früchte GmbH', 1), (0.6, 1, 2, 'Obst und Gemüse Express', 1), (0.7, 1, 1, 'Gemüsemarkt Direkt', 1),
  -- Minzblätter
  (1.2, 10, 2, 'Kräuterhof Aromenlieferant', 2), (1.5, 20, 3, 'Gewürzparadies Großhandel', 2), (1.0, 15, 1, 'Bio-Natur Saftladen', 2),
  -- Zucker
  (0.3, 50, 1, 'Zucker & Co. Versorgung', 3), (0.4, 100, 2, 'Süßwaren-Importeur GmbH', 3), (0.2, 30, 1, 'Feinkost Delikatessen', 3),
  -- Sprudelwasser
  (0.6, 500, 1, 'Getränke-Welt AG', 4), (0.8, 1000, 2, 'Getränkegroßhandel Deluxe', 4), (0.5, 300, 1, 'Alkoholfreie Getränke AG', 4),
  -- Orangensaft
  (1.2, 500, 1, 'Bio-Natur Saftladen', 5), (1.5, 1000, 2, 'Getränkegroßhandel Deluxe', 5), (1.0, 750, 1, 'Frische Früchte GmbH', 5),
  -- Ananas
  (1.5, 300, 2, 'Frische Früchte GmbH', 6), (1.8, 550, 3, 'Obst und Gemüse Express', 6), (1.2, 320, 1, 'Gemüsemarkt Direkt', 6),
  -- Ingwerlimonade
  (0.8, 500, 1, 'Getränke-Welt AG', 7), (0.9, 750, 2, 'Bio-Natur Saftladen', 7), (0.7, 400, 1, 'Alkoholfreie Getränke AG', 7),
  -- Cranberrysaft
  (1.0, 500, 1, 'Bio-Natur Saftladen', 8), (1.2, 1000, 2, 'Getränkegroßhandel Deluxe', 8), (0.9, 750, 1, 'Frische Früchte GmbH', 8),
  -- Kirsche
  (0.5, 50, 1, 'Frische Früchte GmbH', 9), (0.6, 60, 2, 'Obst und Gemüse Express', 9), (0.4, 40, 1, 'Gemüsemarkt Direkt', 9),
  -- Zitrone
  (0.3, 10, 1, 'Frische Früchte GmbH', 10), (0.4, 15, 2, 'Obst und Gemüse Express', 10), (0.2, 8, 1, 'Gemüsemarkt Direkt', 10),
  -- Orange
  (0.4, 10, 1, 'Frische Früchte GmbH', 11), (0.5, 15, 2, 'Obst und Gemüse Express', 11), (0.3, 8, 1, 'Gemüsemarkt Direkt', 11),
  -- Erdbeeren
  (0.6, 100, 2, 'Frische Früchte GmbH', 12), (0.7, 150, 3, 'Obst und Gemüse Express', 12), (0.5, 120, 1, 'Gemüsemarkt Direkt', 12),
  -- Kokosnusscreme
  (1.0, 200, 2, 'Exotische Zutaten GmbH', 13), (1.2, 250, 3, 'Tropische Aromen AG', 13), (0.8, 180, 1, 'Internationale Delikatessen', 13),
  -- Rum
  (8.0, 500, 3, 'Spirituosen Experten', 14),  (9.5, 700, 4, 'Liquor Store Deluxe', 14), (7.5, 450, 2, 'Getränkegroßhandel International', 14),
  -- Wodka
  (6.0, 500, 2, 'Spirituosen Experten', 15), (7.5, 700, 3, 'Liquor Store Deluxe', 15), (5.5, 450, 1, 'Getränkegroßhandel International', 15),
  -- Tequila
  (10.0, 700, 3, 'Spirituosen Experten', 16), (11.5, 800, 4, 'Liquor Store Deluxe', 16), (9.5, 600, 2, 'Getränkegroßhandel International', 16),
  -- Grenadine
  (2.5, 100, 1, 'Sirup Spezialitäten GmbH', 17), (3.0, 150, 2, 'Süße Köstlichkeiten AG', 17), (2.0, 80, 1, 'Exotische Aromen GmbH', 17),
  -- Whiskey
  (15.0, 500, 4, 'Spirituosen Experten', 18), (16.5, 600, 5, 'Liquor Store Deluxe', 18), (14.5, 450, 3, 'Getränkegroßhandel International', 18),
  -- Martini Vermouth
  (8.0, 200, 2, 'Feine Weine & Spirituosen', 19), (9.5, 250, 3, 'Liquor Store Deluxe', 19), (7.5, 180, 1, 'Exklusive Getränke GmbH', 19);

INSERT INTO `recipe_step` (`title`, `description`, `cocktail_id`) VALUES
  -- Virgin Mojito
  ('Minze und Limette zermuddeln', 'Frische Minzblätter und Limettenschnitze im Glas zermuddeln.', 1),
  ('Zucker und Sprudelwasser hinzufügen', 'Zucker und Sprudelwasser ins Glas geben.', 1),
  ('Umrühren und servieren', 'Die Zutaten gut umrühren und mit Eis servieren.', 1),
  -- Orange Julius
  ('Orangensaft und Eis mixen', 'Orangensaft und Eis mixen bis alles glatt ist.', 2),
  ('Vanilleextrakt hinzufügen', 'Einen Spritzer Vanilleextrakt zur Mischung geben.', 2),
  ('Erneut mixen und servieren', 'Nochmals mixen und in einem Glas servieren.', 2),
  -- Ananas Gingerale Smoothie
  ('Ananas und Gingerale mixen', 'Ananas und Gingerale mixen bis alles glatt ist.', 3),
  ('Gekühlt servieren', 'Den Smoothie gekühlt in einem Glas servieren.', 3),

  -- Cranberry Spritzer
  ('Glas mit Eis füllen', 'Fülle ein Glas mit Eiswürfeln.', 4),
  ('Cranberrysaft hinzufügen', 'Cranberrysaft ins Glas geben.', 4),
  ('Mit Sprudelwasser auffüllen', 'Mit Sprudelwasser auffüllen.', 4),
  ('Garnieren und servieren', 'Mit einer Limetten- oder Zitronenscheibe garnieren und servieren.', 4),
  -- Shirley Temple
  ('Glas mit Eis füllen', 'Fülle ein Glas mit Eiswürfeln.', 5),
  ('Ingwerlimonade hinzufügen', 'Ingwerlimonade ins Glas geben.', 5),
  ('Grenadine hinzufügen', 'Einen Spritzer Grenadine hinzufügen.', 5),
  ('Garnieren und servieren', 'Mit einer Kirsche garnieren und servieren.', 5),
  -- Zitronenlimonade
  ('Zitronen auspressen', 'Frische Zitronen auspressen, um den Saft zu gewinnen.', 6),
  ('Zucker und Wasser hinzufügen', 'Zucker und Wasser zum Zitronensaft hinzufügen.', 6),
  ('Gut umrühren', 'Die Mischung gut umrühren, um den Zucker aufzulösen.', 6),
  ('Gekühlt servieren', 'Die Zitronenlimonade gekühlt mit Eis servieren.', 6),


  -- Nicht-alkoholische Sangria
  ('Früchte schneiden', 'Verschiedene Früchte wie Äpfel, Orangen und Beeren schneiden.', 7),
  ('Fruchtsaft und Sprudel mischen', 'Fruchtsaft und Sprudel in einem Krug mischen.', 7),
  ('Geschnittene Früchte hinzufügen', 'Die geschnittenen Früchte in den Krug geben.', 7),
  ('Gekühlt servieren', 'Die nicht-alkoholische Sangria gekühlt mit Eis servieren.', 7),
  -- Piña Colada
  ('Ananas und Kokoscreme mixen', 'Ananas und Kokoscreme mixen, bis alles glatt ist.', 8),
  ('Rum hinzufügen', 'Rum zur Mischung hinzufügen.', 8),
  ('Erneut mixen und servieren', 'Nochmals mixen und in einem Glas servieren.', 8),
  -- Strawberry Daiquiri
  ('Erdbeeren und Rum mixen', 'Erdbeeren und Rum mixen, bis alles glatt ist.', 9),
  ('Limettensaft und Zucker hinzufügen', 'Limettensaft und Zucker zur Mischung hinzufügen.', 9),
  ('Erneut mixen und servieren', 'Nochmals mixen und in einem Glas servieren.', 9),

  -- Margarita
  ('Salzrand vorbereiten', 'Befeuchte den Rand eines Margaritaglases und tauche ihn in Salz.', 10),
  ('Shake Tequila, Limettensaft und Cointreau', 'Shake Tequila, Limettensaft und Cointreau mit Eis.', 10),
  ('Abseihen ins Glas', 'Seihe die Mischung in das vorbereitete Glas ab.', 10),
  ('Mit Limettenscheibe garnieren', 'Garniere mit einer Limettenscheibe und serviere.', 10),
  -- Cosmopolitan
  ('Shake Vodka, Cranberry-Saft und Limettensaft', 'Shake Vodka, Cranberry-Saft und Limettensaft mit Eis.', 11),
  ('Abseihen ins Glas', 'Seihe die Mischung in ein Martiniglas ab.', 11),
  ('Zest Orange über dem Glas', 'Zeste eine Orangenschale über dem Glas.', 11),
  ('Garnieren und servieren', 'Garniere nach Wunsch und serviere.', 11),
  -- Blue Lagoon
  ('Fülle das Glas mit Eis', 'Fülle ein Glas mit Eiswürfeln.', 12),
  ('Gieße Wodka und Curacao ein', 'Gieße Wodka und Blue Curacao über das Eis.', 12),
  ('Fülle mit Limonade auf', 'Fülle das Glas mit Limonade auf.', 12),
  ('Garniere mit Orangenscheibe', 'Garniere mit einer Orangenscheibe und serviere.', 12),

  -- Mai Tai
  ('Eis ins Glas geben', 'Fülle ein Glas mit Eiswürfeln.', 13),
  ('Shake Rum, Limettensaft und Orangenlikör', 'Shake Rum, Limettensaft und Orangenlikör mit Eis.', 13),
  ('Abseihen ins Glas', 'Seihe die Mischung in das Glas mit Eis ab.', 13),
  ('Float dunkler Rum obenauf', 'Gieße einen dunklen Rum vorsichtig obenauf.', 13),
  ('Garnieren und servieren', 'Garniere nach Wunsch und serviere.', 13),
  -- Screwdriver
  ('Eis ins Glas geben', 'Fülle ein Glas mit Eiswürfeln.', 14),
  ('Gieße Wodka ein', 'Gieße Wodka über das Eis.', 14),
  ('Fülle mit Orangensaft auf', 'Fülle das Glas mit Orangensaft auf.', 14),
  ('Umrühren und servieren', 'Umrühren und serviere.', 14),
  -- Mojito
  ('Minze und Limetten zermuddeln', 'Zermuddle frische Minze und Limettenschnitze im Glas.', 15),
  ('Zucker und Club Soda hinzufügen', 'Füge Zucker und Club Soda ins Glas hinzu.', 15),
  ('Vorsichtig umrühren', 'Umrühren, ohne die Minze zu zerstören.', 15),
  ('Mit Crushed Ice auffüllen', 'Fülle das Glas mit Crushed Ice auf.', 15),
  ('Garnieren und servieren', 'Mit Minzzweig garnieren und serviere.', 15),

  -- Tequila Sunrise
  ('Eis ins Glas geben', 'Fülle ein Glas mit Eiswürfeln.', 16),
  ('Gieße Tequila und Orangensaft ein', 'Gieße Tequila und Orangensaft über das Eis.', 16),
  ('Umrühren', 'Umrühren, um die Zutaten zu mischen.', 16),
  ('Langsam Grenadine einfüllen', 'Gib Grenadine langsam hinzu, sodass sie am Boden bleibt.', 16),
  ('Nicht umrühren, Garnieren', 'Nicht umrühren und mit einer Orangenscheibe garnieren.', 16),
  -- Old Fashioned
  ('Zucker und Bitterstoffe hinzufügen', 'Gib Zuckerwürfel und Bitterstoffe in ein Glas.', 17),
  ('Muddle mit Orangenzeste', 'Zermuddle den Zucker mit einer Orangenzeste.', 17),
  ('Gieße Bourbon hinzu', 'Gieße Bourbon über die Zuckerzeste.', 17),
  ('Füge Eiswürfel hinzu', 'Füge Eiswürfel ins Glas hinzu.', 17),
  ('Mit Orangenscheibe und Kirsche garnieren', 'Garniere mit einer Orangenscheibe und einer Kirsche.', 17),
  -- Long Island Iced Tea
  ('Eis ins Glas geben', 'Fülle ein Glas mit Eiswürfeln.', 18),
  ('Gieße Wodka, Tequila, Rum, Gin und Triple Sec ein', 'Gieße Wodka, Tequila, Rum, Gin und Triple Sec über das Eis.', 18),
  ('Fülle mit Sour Mix und Cola auf', 'Fülle das Glas mit Sour Mix und Cola auf.', 18),
  ('Umrühren', 'Umrühren, um die Zutaten zu mischen.', 18),
  ('Mit Zitronenscheibe garnieren', 'Garniere mit einer Zitronenscheibe und serviere.', 18),

  -- Whiskey Sour
  ('Eis ins Glas geben', 'Fülle ein Glas mit Eiswürfeln.', 19),
  ('Shake Whiskey, Zitronensaft und Zuckersirup', 'Shake Whiskey, Zitronensaft und Zuckersirup mit Eis.', 19),
  ('Abseihen ins Glas', 'Seihe die Mischung in das Glas mit Eis ab.', 19),
  ('Garnieren mit Kirsche und Orangenscheibe', 'Garniere mit einer Kirsche und einer Orangenscheibe.', 19),
  -- Martini
  ('Eis ins Glas geben', 'Fülle ein Rührglas mit Eiswürfeln.', 20),
  ('Rühren von Gin und Vermouth', 'Rühre Gin und Vermouth in einem Rührglas mit Eis.', 20),
  ('Abseihen ins Glas', 'Seihe die Mischung in ein Martiniglas ab.', 20),
  ('Zest Orange über dem Glas', 'Zeste eine Orangenschale über dem Glas.', 20),
  ('Garnieren und servieren', 'Garniere nach Wunsch und serviere.', 20);

INSERT INTO `cocktail_ingredients` (`cocktail_id`, `ingredient_id`, `amount`) VALUES
  -- Virgin Mojito
  (1, 1, 6), (1, 2, 8), (1, 3, 10), (1, 4, 150), (1, 11, 1),
  -- Orange Julius
  (2, 5, 300), (2, 10, 1), (2, 12, 100), (2, 13, 60),
  -- Pineapple Gingerale Smoothie
  (3, 6, 200), (3, 7, 400), (3, 11, 1),
  -- Cranberry Spritzer
  (4, 8, 100), (4, 3, 5), (4, 4, 150), (4, 11, 1),
  -- Shirley Temple
  (5, 7, 250), (5, 16, 50), (5, 17, 15), (5, 9, 1),
  -- Lemonade
  (6, 10, 3), (6, 3, 5), (6, 4, 150), (6, 11, 1),
  -- Alkoholfreier Sangria
  (7, 5, 200), (7, 8, 200), (7, 6, 150), (7, 9, 1),
  -- Piña Colada
  (8, 6, 150), (8, 13, 120), (8, 14, 60), (8, 16, 30), (8, 18, 30),
  -- Strawberry Daiquiri
  (9, 12, 120), (9, 14, 60), (9, 15, 30), (9, 3, 10),
  -- Margarita
  (10, 1, 2), (10, 16, 60), (10, 19, 30),
  -- Cosmopolitan
  (11, 15, 50), (11, 8, 50), (11, 19, 1),
  -- Blue Lagoon
  (12, 15, 50), (12, 14, 30), (12, 6, 150), (12, 11, 1),
  -- Mai Tai
  (13, 1, 2), (13, 6, 120), (13, 14, 60), (13, 15, 30), (13, 18, 30), (13, 9, 1),
  -- Screwdriver
  (14, 5, 180), (14, 15, 60), (14, 3, 10),
  -- Mojito
  (15, 1, 3), (15, 2, 6), (15, 3, 15), (15, 4, 120), (15, 16, 40),
  -- Tequila Sunrise
  (16, 5, 180), (16, 8, 100), (16, 16, 60), (16, 6, 60), (16, 17, 15),
  -- Old Fashioned
  (17, 18, 60), (17, 3, 5), (17, 4, 150), (17, 19, 1),
  -- Long Island Iced Tea
  (18, 14, 30), (18, 15, 30), (18, 16, 30), (18, 5, 60), (18, 18, 30), (18, 3, 30), (18, 4, 150),
  -- Whiskey Sour
  (19, 18, 60), (19, 3, 30), (19, 4, 150), (19, 10, 1),
  -- Martini
  (20, 1, 2), (20, 19, 15);
