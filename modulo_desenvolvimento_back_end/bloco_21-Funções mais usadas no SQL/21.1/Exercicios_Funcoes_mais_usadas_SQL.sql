-- Exercicio 1:

SELECT * FROM hr.jobs;

SELECT MAX(MAX_SALARY) FROM hr.jobs;

-- Exercicio 2:

SELECT MAX(MAX_SALARY) - MIN(MIN_SALARY) FROM hr.jobs;

-- Exercicio 3:

SELECT JOB_ID, (MAX_SALARY + MIN_SALARY) DIV 2 AS media_salarial FROM hr.jobs
ORDER BY media_salarial DESC;

-- EXERCICIO 4:

SELECT * FROM hr.employees;

SELECT SUM(SALARY) FROM hr.employees;

-- Exercicio 5:

SELECT ROUND(MAX(SALARY), 2), ROUND(MIN(SALARY), 2), ROUND(SUM(SALARY), 2), ROUND(AVG(SALARY), 2) FROM hr.employees;

-- Exercicio 6:

SELECT COUNT(EMPLOYEE_ID) FROM hr.employees
WHERE JOB_ID = 'IT_PROG';

-- Exercicio 7:

SELECT JOB_ID, SUM(SALARY) FROM hr.employees
GROUP BY JOB_ID;

-- Exercicio 8:

SELECT JOB_ID, SUM(SALARY) FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- Exercicio 9:

SELECT JOB_ID, ROUND(AVG(SALARY), 2) AS media_salarial FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY media_salarial DESC;

-- Exercicio 10:

SELECT DEPARTMENT_ID, ROUND(AVG(SALARY), 2) AS media_salarial, COUNT(EMPLOYEE_ID) AS numero_funcionarios
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING numero_funcionarios > 10;

-- Exercicio 11:

SELECT EMPLOYEE_ID,
CASE
WHEN SUBSTRING(PHONE_NUMBER, 1, 3) = '515' THEN '777'
ELSE SUBSTRING(PHONE_NUMBER, 1, 3)
END AS DDD,
SUBSTRING(PHONE_NUMBER, 4)
FROM hr.employees;

-- Exercicio 12:

SELECT * FROM hr.employees
WHERE LENGTH(FIRST_NAME) >=8 ;

-- Exercicio 13:

SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) FROM hr.employees;

-- Exercicio 14:

SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) FROM hr.employees;

-- Exercicio 15:

SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) FROM hr.employees;

-- Exercicio 16:

SELECT UCASE(FIRST_NAME) FROM hr.employees;

-- Exercicio 17:

SELECT LAST_NAME, HIRE_DATE FROM hr.employees
WHERE MONTH(HIRE_DATE) = 7 AND YEAR(HIRE_DATE) = 1987;

-- Exercicio 18:

SELECT FIRST_NAME, LAST_NAME, DATEDIFF(CURRENT_DATE(), HIRE_DATE) AS tempo_empregado FROM hr.employees;
