-- Exercicio 1:

SELECT M.title, B.domestic_sales, B.international_sales
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON M.id = B.movie_id;

-- Exercicio 2:

SELECT M.title, (B.international_sales + B.domestic_sales)
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON M.id = B.movie_id
WHERE B.international_sales > B.domestic_sales;

-- Exercicio 3:

SELECT M.title, B.rating
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B ON M.id = B.movie_id
ORDER BY B.rating DESC;

-- Exercicio 4:

SELECT T.name, M.title, M.director, M.year, M.length_minutes
FROM Pixar.Theater AS T
LEFT JOIN Pixar.Movies AS M ON T.id = M.theater_id
ORDER BY T.name;

-- Exercicio 5:

SELECT T.name, M.title, M.director, M.year, M.length_minutes
FROM Pixar.Theater AS T
RIGHT JOIN Pixar.Movies AS M ON T.id = M.theater_id
ORDER BY T.name;

-- Exercicio 6:

SELECT B.rating, 
( SELECT title FROM Pixar.Movies AS M WHERE B.movie_id = M.id ) AS title
FROM Pixar.BoxOffice AS B
WHERE B.rating > 7.5;

SELECT B.rating, M.title
FROM Pixar.BoxOffice AS B
INNER JOIN Pixar.Movies AS M ON B.movie_id = M.id
WHERE B.rating > 7.5;

-- Exercicio 7:

SELECT M.year,
( SELECT B.rating  FROM Pixar.BoxOffice AS B WHERE B.movie_id = M.id ) AS rating
FROM Pixar.Movies AS M
WHERE M.year > 2009;

SELECT M.year,  B.rating 
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B ON B.movie_id = M.id 
WHERE M.year > 2009;

-- Exercicio 8:

SELECT T.name, T.location
FROM Pixar.Theater AS T
WHERE EXISTS (
SELECT * FROM Pixar.Movies
WHERE theater_id = T.id);

-- Exercicio 9:

SELECT T.name, T.location
FROM Pixar.Theater AS T
WHERE NOT EXISTS (
SELECT * FROM Pixar.Movies
WHERE theater_id = T.id);
