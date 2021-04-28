-- Bônus
USE Pixar;

-- EXERCICIO 8:

SELECT * FROM BoxOffice
WHERE domestic_sales > 400000000;

UPDATE BoxOffice
SET rating = 9.0
WHERE Movie_id IN (6, 10);

-- EXERCICIO 9:

SELECT * FROM BoxOffice
WHERE international_sales < 300000000 AND domestic_sales > 200000000;

UPDATE BoxOffice
SET rating = 6.0
WHERE Movie_id IN (3, 7, 8);

-- EXERCICIO 10:

SELECT id FROM Movies
WHERE length_minutes < 100;

DELETE FROM BoxOffice
WHERE Movie_id IN (1, 6, 7, 8);

DELETE FROM Movies
WHERE id IN (1, 6, 7, 8);