SELECT A.actor_id, A.first_name, A.last_name, F.film_id
FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS F
ON A.actor_id = F.actor_id;

SELECT S.first_name, S.last_name, A.address
FROM sakila.staff AS S
INNER JOIN sakila.address AS A
ON A.address_id = S.address_id;

SELECT C.customer_id, C.first_name, C.email, A.address_id, A.address
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
ORDER BY C.first_name DESC
LIMIT 100;

SELECT C.first_name, C.email, C.address_id, A.address, A.district
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE A.district = 'California' AND C.first_name LIKE '%rene%';

SELECT C.first_name, COUNT(A.address)
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE C.active = 1
GROUP BY C.first_name
ORDER BY C.first_name DESC;

SELECT CONCAT(S.first_name, ' ', S.last_name) AS staff_name, P.amount
FROM sakila.staff AS S
INNER JOIN sakila.payment AS P
WHERE YEAR(P.payment_date) = 2006;

SELECT Act.actor_id, CONCAT(Act.first_name, ' ', Act.last_name) AS actor_name, FAct.film_id, Film.title
FROM sakila.actor AS Act
INNER JOIN sakila.film_actor AS FAct
ON Act.actor_id = FAct.actor_id
INNER JOIN sakila.film AS Film
ON FAct.film_id = Film.film_id;

SELECT t1.film_id, t1.replacement_cost, t2.film_id, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.replacement_cost = t2.replacement_cost;

SELECT t1.title, t1.rental_duration, t2.title, t2.rental_duration
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.length = t2.length 
AND t1.rental_duration IN (2, 3, 4) 
AND t2.rental_duration IN (2, 3, 4);

SELECT first_name, last_name FROM sakila.actor
UNION ALL
SELECT first_name, last_name FROM sakila.staff;

SELECT first_name FROM sakila.actor WHERE first_name LIKE '%je%'
UNION
SELECT first_name FROM sakila.customer WHERE first_name LIKE '%tracy%';

(SELECT first_name FROM sakila.actor ORDER BY actor_id DESC LIMIT 5)
UNION
(SELECT first_name FROM sakila.staff LIMIT 1)
UNION
(SELECT first_name FROM sakila.customer LIMIT 5 OFFSET 15)
ORDER BY first_name;

SELECT first_name, last_name FROM sakila.actor
UNION ALL
SELECT first_name, last_name FROM sakila.customer
LIMIT 15 OFFSET 60;