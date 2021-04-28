USE sakila;

-- EXERCICIO 01:

CREATE FULLTEXT INDEX `index_category_name` ON `category`(`name`);

-- Após ter criado o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

-- Após ter excluído o índice, mensure o custo com a seguinte query:
DROP INDEX index_category_name ON `category`;

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';

-- EXERCICIO 02:

CREATE INDEX `index_postal_code` ON `address`(`postal_code`);

-- Mensure o custo com a seguinte query:
SELECT *
FROM sakila.address
WHERE postal_code = '36693';

DROP INDEX index_postal_code ON `address`;
