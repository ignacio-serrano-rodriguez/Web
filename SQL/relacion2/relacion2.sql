-- Relación 2

-- 1. Muestra todos los datos de todos los alumnos.
SELECT *
FROM alumnos a;

-- 2. Muestra el nombre, localidad y fecha de nacimiento de todos los alumnos.
SELECT nombre, localidad, fecha_nac
FROM alumnos a;

/* 3. Muestra el nombre de todos los alumnos. En el resultado de la consulta, la columna
“Nombre” debe aparecer con la etiqueta “Nombre y apellidos”. */
SELECT nombre as 'nombre y apellidos'
FROM alumnos a;

/* 4. Obtén el nombre y el número de faltas multiplicado por 2 de todos los alumnos
(COLUMNAS CALCULADAS). En el resultado de la consulta, la columna faltas
debe aparecer con la etiqueta “Faltas de asistencia”. */
SELECT nombre, faltas*2 as 'faltas de asistencia' 
FROM alumnos a;

-- 5. Consulta los datos de los alumnos que son de Lorca.
SELECT nombre, localidad 
FROM alumnos a
WHERE localidad = 'lorca';

-- 6. Obtén los datos de los alumnos que son de Murcia o Alhama de Murcia.
SELECT *
FROM alumnos a
WHERE localidad in ('murcia', 'alhama de murcia');

/* 7. Obtén los datos de los alumnos que son de Murcia y están en el primer curso de
ESO */
SELECT nombre, localidad, nivel, curso
FROM alumnos a 
WHERE localidad = 'murcia' && nivel = 'eso' && curso = '1';

/* 8. Muestra los alumnos que son de Lorca, están en segundo curso de Bachillerato y
tienen más de 10 faltas. */
SELECT nombre, localidad, nivel, curso, faltas 
FROM alumnos a 
WHERE localidad = 'lorca' && nivel = 'bachiller' && faltas > 10;

-- 9. Obtén los datos de aquellos alumnos que son de Murcia ordenados por nombre.
SELECT nombre, localidad
FROM alumnos a 
WHERE localidad = 'murcia'
ORDER BY nombre;

/* 10. Obtén los datos de todos los alumnos ordenados por nivel, y dentro de cada nivel por
curso. */
SELECT nombre, nivel, curso
FROM alumnos a 
ORDER BY nivel, curso;

/* 11. Muestra los datos de aquellos alumnos que tengan más de 10 faltas en primer o
segundo curso. */
SELECT nombre, curso, faltas
FROM alumnos a
WHERE faltas > 10
AND curso IN ('1','2');

/* 12. Muestra los datos de todos aquellos alumnos que tengan menos de 10 faltas en 3º o 4º
curso y además sean de Murcia. */
SELECT nombre, curso, localidad, faltas
FROM alumnos a
WHERE faltas > 10
AND curso IN ('3','4')
AND localidad = 'murcia';

-- 13. Obtén con una consulta todos los cursos que hay sin repeticiones.
SELECT DISTINCT curso
FROM alumnos a;

-- 14. Obtén los datos de los alumnos que no tengan 10 faltas en 1º de E.S.O
SELECT nombre, nivel, curso, faltas
FROM alumnos a
WHERE nivel = 'ESO'
AND curso = 1
AND faltas <> 10;

-- 15. Muestra los datos de aquellos alumnos cuyo nombre empiece por la letra 'B'.
SELECT nombre
FROM alumnos a
where nombre LIKE 'b%';

/* 16. Con una consulta obtén los alumnos que son de Murcia y cuyo nombre termina con la
letra 'O'. */
SELECT nombre, localidad 
FROM alumnos a
where localidad = 'murcia'
and nombre LIKE '%o';

/* 17. Muestra los datos de todos aquellos alumnos que están en 1º curso de E.S.O. Y tienen
una letra 'U' en la segunda posición del nombre. */
SELECT nombre, curso, nivel
FROM alumnos a 
WHERE curso = 1
and nivel = 'ESO'
AND nombre LIKE '_u%';

-- 18. Obtén los datos de los alumnos cuya columna “Faltas” es 0.
SELECT nombre, faltas
FROM alumnos a 
WHERE faltas = 0;

/* 19. Muestra los datos de aquellos alumnos que tienen entre 10 y 20 faltas. Ordena el
resultado por nombre. */
SELECT nombre, faltas
FROM alumnos a 
WHERE faltas BETWEEN 10 AND 20
ORDER BY nombre;

/* 20. Muestra los datos de los alumnos que tienen entre 10 y 20 faltas y además son de
Murcia. */
SELECT nombre, faltas, localidad 
FROM alumnos a 
WHERE faltas BETWEEN 10 AND 20
and localidad = 'murcia';

/* 21. Muestra los datos de los alumnos que tienen entre 10 y 20 faltas, son de Murcia y
están matriculados en 1º de E.S.O. */
SELECT nombre, localidad, nivel, curso, faltas
FROM alumnos a 
WHERE faltas BETWEEN 10 AND 20
and localidad = 'murcia'
and nivel = 'ESO'
and curso = 1;

/* 22. Con una consulta muestra los datos de los alumnos cuyas faltas sean menores que 10
y mayores que 20 */
SELECT nombre, faltas
FROM alumnos a 
WHERE faltas < 10
OR faltas > 10;

/* 23. Muestra los datos de los alumnos cuya fecha de nacimiento comprenda los años 1993
y 1994. Ordena el resultado por nombre.*/
SELECT nombre, fecha_nac 
FROM alumnos a 
WHERE fecha_nac BETWEEN '1993-01-01' AND '1994-01-01'
ORDER BY nombre;

/* 24. Muestra los datos de los alumnos que sean de primer o segundo curso (no importa que
sean de E.S.O. O Bachiller). */
SELECT nombre, curso, nivel 
FROM alumnos a
WHERE curso IN (1, 2);

/* 25. Obtén los datos de aquellos alumnos que sean de tercer o cuarto curso y sean de
Murcia */
SELECT nombre, curso, localidad 
FROM alumnos a
WHERE curso IN (3, 4)
AND localidad = 'murcia';

/* 26. Muestra los datos de los alumnos que no sean de E.S.O, ordenados por curso y por
nombre descendentemente. */
SELECT nombre, curso, nivel 
FROM alumnos a
WHERE nivel <> 'ESO'
ORDER BY curso, nombre DESC;

/* 27. Obtén los datos de los alumnos cuyo nombre empiece por la letra 'J', que tengan más
de 10 faltas y no sean de Bachiller. Ordena el resultado por curso, y dentro de cada
curso, por nombre */
SELECT nombre, nivel, curso, faltas
FROM alumnos a
WHERE nombre LIKE 'j%'
AND faltas > 10
AND nivel <> 'bachiller'
ORDER BY curso, nombre;

/* 28. Con una consulta obtén el expediente, nombre, curso y nivel de todos los alumnos
ordenado por curso, nivel ascendentemente y nombre descendentemente cuyo nivel
no sea 'BACHILLER'. */
SELECT expediente, nombre, curso, nivel
FROM alumnos a
WHERE nivel <> 'bachiller'
ORDER BY curso, nivel ASC, nombre DESC;

/* 29. Muestra el nombre de cada alumno en mayúscula y la localidad a la que pertenecen en
minúscula, ordenados por localidad. */
SELECT UPPER(nombre), LOWER(localidad) 
FROM alumnos a
ORDER BY localidad;

/* 30. Con una consulta muestra el nombre y edad que cumple este año de cada uno de los
alumnos (la edad se calcula restando el año de nacimiento a 2023) */
SELECT nombre ,(YEAR(CURDATE()) - YEAR(fecha_nac)) AS edad 
FROM alumnos a;