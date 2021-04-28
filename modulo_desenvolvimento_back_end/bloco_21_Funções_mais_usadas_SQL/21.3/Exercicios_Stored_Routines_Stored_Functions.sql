USE BeeMovies;

-- Exercicio 1:

DELIMITER ||
CREATE TRIGGER trigger_movies_insert
	BEFORE INSERT ON movies
    FOR EACH ROW
BEGIN
	SET NEW.release_year = NOW();
END
|| DELIMITER ;

DELIMITER ||
CREATE TRIGGER trigger_movie_logs_insert
	AFTER INSERT ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movie_logs(movie_id, action, log_date)
    VALUES (NEW.movie_id, 'INSERT', NOW());
END
|| DELIMITER ;

-- Exercicio 2:

DELIMITER ||
CREATE TRIGGER trigger_movies_update
	BEFORE UPDATE ON movies
    FOR EACH ROW
BEGIN
	SET NEW.ticket_price_estimation = IF(NEW.ticket_price > OLD.ticket_price, 'Increasing', 'Decreasing');
END
|| DELIMITER ;

DELIMITER ||
CREATE TRIGGER trigger_movie_logs_update
	AFTER UPDATE ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movie_logs(movie_id, action, log_date)
    VALUES (NEW.movie_id, 'UPDATE', NOW());
END
|| DELIMITER ;

-- Exercicio 3:

DELIMITER ||
CREATE TRIGGER trigger_movie_logs_delete
	AFTER DELETE ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movie_logs(movie_id, action, log_date)
    VALUES (OLD.movie_id, 'DELETE', NOW());
END
|| DELIMITER ;
