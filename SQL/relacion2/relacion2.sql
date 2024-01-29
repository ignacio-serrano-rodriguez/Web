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
SELECT DISTINCT nombre
FROM alumnos a;

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
