-- 1. Mostrar los datos de los empleados que pertenezcan al mismo departamento que ʻGILʼ. 
SELECT *
FROM emple e
WHERE e.apellido <> 'gil' AND e.dept_no IN
	(SELECT e2.dept_no
		FROM emple e2
		WHERE e2.apellido = 'gil');

/* 2. Mostrar los datos de los empleados que tengan el mismo oficio que ʻGILʼ. 
El resultado debe ir ordenado por apellido. */
SELECT *
FROM emple e
WHERE e.apellido <> 'gil' AND e.oficio IN
	(SELECT e2.oficio
		FROM emple e2
		WHERE e2.apellido = 'gil')
ORDER BY apellido;

/* 3. Mostrar los empleados (apellido, oficio, salario y fecha de alta) que desempeñen 
el mismo oficio que JIMENO y que tengan un salario mayor o igual que ʻFERNÁNDEZʼ. */
SELECT e.apellido, e.oficio, e.salario, e.fecha_alt
FROM emple e
WHERE e.apellido <> 'jimeno' AND e.oficio IN
	(SELECT e2.oficio
		FROM emple e2
		WHERE e2.apellido = 'jimeno')
AND e.salario >= 
	(SELECT e2.salario
		FROM emple e2
		WHERE e2.apellido = 'fernández');

/* 4. Mostrar en pantalla el apellido, oficio y salario de los empleados del departamento de ʻFERNÁNDEZʼ 
que tengan su mismo salario. */
SELECT e.apellido, e.oficio, e.salario
FROM emple e
WHERE e.apellido <> 'fernandez' AND e.dept_no IN 
	(SELECT e2.dept_no
		FROM emple e2
		WHERE e2.apellido = 'fernández')
AND e.salario = 
	(SELECT e2.salario
		FROM emple e2
		WHERE e2.apellido = 'fernández');

/* 5. Mostrar los datos de los empleados que tengan un salario mayor que ʻGILʼ y que pertenezcan al 
departamento número 10. */
SELECT *
FROM emple e
WHERE e.dept_no = 10 AND e.salario >
	(SELECT e2.salario
		FROM emple e2
		WHERE e2.apellido = 'gil');

-- 6. Mostrar los apellidos, oficios y localizaciones de los departamentos de cada uno de los empleados. 
SELECT 
	e.apellido, 
	e.oficio,  
	(SELECT d.loc 
		FROM depart d 
		WHERE e.dept_no = d.dept_no) AS localizacion
FROM emple e;

-- 7. Seleccionar el apellido, el oficio y la localidad de los departamentos donde trabajan los ANALISTAS. 
SELECT 
	e.apellido, 
	e.oficio,  
	(SELECT d.loc 
		FROM depart d 
		WHERE e.dept_no = d.dept_no) AS localizacion
FROM emple e
WHERE e.oficio = 'analista';

-- 8. Seleccionar el apellido, el oficio y salario de los empleados que trabajan en Madrid. 
SELECT 
	e.apellido, 
	e.oficio,  
	e.salario,
	(SELECT d.loc 
		FROM depart d 
		WHERE e.dept_no = d.dept_no) AS localizacion
FROM emple e
WHERE e.dept_no IN
	(SELECT d.dept_no
		FROM depart d 
		WHERE e.dept_no = d.dept_no && d.loc = 'madrid');

/* 9. Seleccionar el apellido, salario y localidad donde trabajan de los empleados que tengan un salario entre 
200000 y 300000 */
SELECT 
	e.apellido, 
	e.oficio,  
	e.salario,
	(SELECT d.loc 
		FROM depart d 
		WHERE e.dept_no = d.dept_no) AS localizacion
FROM emple e
WHERE e.salario BETWEEN 200000 AND 300000;

/* 10. Mostrar el apellido, salario y nombre del departamento de los empleados que tengan el mismo oficio 
que ʻGILʼ. */ 
SELECT 
	e.apellido, 
	e.oficio,  
	e.salario,
	(SELECT d.dnombre
		FROM depart d 
		WHERE e.dept_no = d.dept_no) AS 'departamento'
FROM emple e
WHERE e.oficio IN
	(SELECT e2.oficio
		FROM emple e2
		WHERE e2.apellido = 'gil')
AND e.apellido <> 'gil';

/* 11. Mostrar el apellido, salario y nombre del departamento de los empleados que tengan el mismo oficio 
que ʻGILʼ y que no tengan comisión. */
SELECT 
	e.apellido, 
	e.oficio,  
	e.salario,
	(SELECT d.dnombre
		FROM depart d 
		WHERE e.dept_no = d.dept_no) AS 'departamento',
	e.comision
FROM emple e
WHERE e.oficio IN
	(SELECT e2.oficio
		FROM emple e2
		WHERE e2.apellido = 'gil')
AND e.apellido <> 'gil'
AND e.comision IS NULL;

/* 12. Mostrar los datos de los empleados que trabajan en el departamento de contabilidad, ordenados 
por apellidos. */
SELECT *
FROM emple e
WHERE e.dept_no IN
	(SELECT d.dept_no
		FROM depart d
		WHERE d.dnombre = 'contabilidad')
ORDER BY e.apellido;

-- 13.Apellido de los empleados que trabajan en Sevilla y cuyo oficio sea analista o empleado. 
SELECT e.apellido
FROM emple e
WHERE e.oficio IN ('analista', 'empleado')
AND e.dept_no IN
	(SELECT d.dept_no
	FROM depart d
	WHERE d.loc = 'sevilla');

-- 14.Calcula el salario medio de todos los empleados. 
SELECT AVG(salario) as 'salario medio'
FROM emple e;

-- 15.¿Cuál es el máximo salario de los empleados del departamento 10? 
SELECT MAX(e.salario) AS 'máximo salario'
FROM emple e
WHERE e.dept_no = 10;

-- 16.Calcula el salario mínimo de los empleados del departamento 'VENTAS'.
SELECT min(e.salario) AS 'mínimo salario'
FROM emple e
WHERE e.dept_no IN
	(SELECT d.dept_no
		FROM depart d
		WHERE d.dnombre = 'ventas');

-- 17.Calcula el promedio del salario de los empleados del departamento de 'CONTABILIDAD'.
SELECT AVG(e.salario) as 'salario promedio'
FROM emple e 
WHERE e.dept_no IN
	(SELECT d.dept_no
		FROM depart d
		WHERE d.dnombre = 'contabilidad');

-- 18.Mostrar los datos de los empleados cuyo salario sea mayor que la media de todos los salarios. 
SELECT *
FROM emple e 
WHERE e.salario > 
	(SELECT AVG(e2.salario)
		FROM emple e2);

-- 19.¿Cuántos empleados hay en el departamento número 10? 
SELECT COUNT(*)
FROM emple e 
WHERE e.dept_no = 10;

-- 20.¿Cuántos empleados hay en el departamento de 'VENTAS'? 
SELECT COUNT(*)
FROM emple e 
WHERE e.dept_no IN
	(SELECT d.dept_no
		FROM depart d
		WHERE d.dnombre = 'ventas');

-- 21.Calcula el número de empleados que hay que no tienen comisión. 
SELECT COUNT(*)
FROM emple e 
WHERE e.comision IS NULL OR e.comision = 0; 

-- 22.Seleccionar el apellido del empleado que tiene máximo salario. 
SELECT e.apellido
FROM emple e 
WHERE e.salario = 
	(SELECT MAX(e2.salario)
	FROM emple e2); 

-- 23.Mostrar los apellidos del empleado que tiene el salario más bajo. 
SELECT e.apellido
FROM emple e 
WHERE e.salario = 
	(SELECT MIN(e2.salario)
	FROM emple e2); 

-- 24.Mostrar los datos del empleado que tiene el salario más alto en el departamento de 'VENTAS'. 
SELECT e.apellido
FROM emple e 
WHERE e.salario = 
	(SELECT MAX(e2.salario)
		FROM emple e2
		WHERE e2.dept_no IN 
			(SELECT d.dept_no
			FROM depart d
			WHERE d.dnombre = 'ventas')); 

-- 25. A partir de la tabla EMPLE visualizar cuántos apellidos de los empleados empiezan por la letra ʻA'. 
SELECT e.apellido
FROM emple e 
WHERE e.apellido LIKE 'a%';

/* 26.Dada la tabla EMPLE, obtener el sueldo medio, el número de comisiones no nulas, el máximo sueldo 
y el sueldo mínimo de los empleados del departamento 30. */
SELECT AVG(e.salario) as 'sueldo medio', COUNT(e.comision) as 'numero comisiones', MAX(e.salario) as 'máximo sueldo', MIN(e.salario) as 'sueldo mínimo'
FROM emple e
WHERE  e.dept_no = 30;