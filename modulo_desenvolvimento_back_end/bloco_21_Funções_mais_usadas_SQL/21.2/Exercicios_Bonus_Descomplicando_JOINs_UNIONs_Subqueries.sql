-- Exercicio 10:

SELECT M.*, B.rating
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B ON M.id = B.movie_id
WHERE B.rating > 8;

-- Exercicio 11:

SELECT t1.title, t1.length_minutes, t2.title, t2.length_minutes
FROM Pixar.Movies AS t1, Pixar.Movies AS t2
WHERE t1.director = t2.director AND t1.title <> t2.title;

-- Exercicio 12:

SELECT M.title 
FROM Pixar.Movies AS M 
WHERE ( SELECT B.movie_id FROM Pixar.BoxOffice AS B WHERE (B.international_sales + B.domestic_sales) > 500000000
AND M.id = B.movie_id ) AND M.length_minutes > 110;

SELECT M.title
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B ON M.id = B.movie_id
WHERE (B.international_sales + B.domestic_sales) > 500000000 AND M.length_minutes > 110;