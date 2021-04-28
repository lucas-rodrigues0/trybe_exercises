use sakila;

-- EXERCICIO 1:

CREATE VIEW `film_with_categories` AS
	SELECT F.`title`, FC.`category_id`, C.`name`
    FROM film AS F
    INNER JOIN film_category AS FC ON FC.film_id = F.film_id
    INNER JOIN category AS C ON C.category_id = FC.category_id
    ORDER BY `title`;
    
SELECT * FROM film_with_categories;

-- EXERCICIO 2:

CREATE VIEW `film_info` AS
	SELECT FA.`actor_id`, 
    CONCAT(A.`first_name`, ' ', A.`last_name`) AS `actor`,
    F.`title`
    FROM `film_actor` AS FA
    INNER JOIN `actor` AS A ON A.`actor_id` = FA.`actor_id`
    INNER JOIN `film` AS F ON F.`film_id` = FA.`film_id`
    ORDER BY `actor`;
    
SELECT * FROM film_info;

-- EXERCICIO 3:

CREATE VIEW `address_info` AS
	SELECT A.`address_id`,
    A.`address`,
    A.`district`,
    C.`city_id`,
    C.`city`
    FROM `address` AS A
    INNER JOIN `city` AS C ON C.`city_id` = A.`city_id`
    ORDER BY `city`;
    
SELECT * FROM address_info;

-- EXERCICIO 4:

CREATE VIEW `movies_languages` AS
	SELECT F.`title`, F.`language_id`, L.`name` AS `language`
    FROM `film` AS F
    INNER JOIN `language` AS L ON L.`language_id` = F.`language_id`;
    
SELECT * FROM movies_languages;
