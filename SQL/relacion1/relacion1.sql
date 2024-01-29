-- Relación 1

-- 1. Mostrar todos los datos de todas las personas.
SELECT *
FROM personas p;

-- 2. Obtén el DNI, apellidos y función de todas las personas
SELECT dni, apellidos, funcion
FROM personas p;

-- 3. Mostrar los apellidos de las personas que vivan en LORCA.
SELECT apellidos, localidad
from personas p 
where localidad = 'lorca';

-- 4. Mostrar los apellidos de las personas que vivan en MURCIA o LORCA
SELECT apellidos, localidad 
from personas p 
where localidad IN ('murcia', 'lorca');

/* 5. Seleccionar los datos de aquellas personas que vivan en MURCIA y tengan un salario
superior a los 1500 euros. */
SELECT apellidos, localidad, salario
from personas p 
where localidad = 'murcia'
and salario > 1500;

/* 6. Mostrar los datos de las personas que vivan en MURCIA, tengan un salario superior a
los 1500 euros y sean DIRECTORES */
SELECT apellidos, localidad, salario, funcion
from personas p 
where localidad = 'murcia' 
and salario > 1500
and funcion = 'director';

/* 7. Mostrar los datos de las personas cuya función sea MÉDICO ordenados por apellidos
descendentemente. */
SELECT apellidos, funcion
from personas p 
where funcion = 'medico'
ORDER BY apellidos DESC;

/* 8. Mostrar los datos de las personas que tengan un salario superior a 1500 euros y sean
médicos. Ordenar la salida por salario descendentemente */
SELECT apellidos, salario, funcion 
from personas p 
where salario > 1500
and funcion = 'medico'
ORDER BY salario DESC;

-- 9. Seleccionar aquellas personas cuyo apellido comience por M.
SELECT apellidos 
from personas p
where apellidos LIKE 'm%';

/* 10. Mostrar los datos de las personas que tengan una M en el apellido y cuya función sea
CONSERJE. */
SELECT apellidos, funcion
from personas p
where apellidos LIKE '%m%'
and funcion = 'conserje';

-- 11. Mostrar aquellas personas que tengan un salario entre 1500 y 2000 euros.
SELECT apellidos, salario 
from personas p
where salario BETWEEN 1500 and 2000;

-- 12. Seleccionar los datos de aquellas personas cuya función sea MÉDICO o DIRECTOR.
SELECT apellidos, funcion 
from personas p 
WHERE funcion IN ('medico','director');

/* 13. Obtener los datos de aquellas personas cuya función no sea CONSERJE y tengan un
salario superior a los 1500 euros, ordenados por apellido descendentemente. */
SELECT apellidos, funcion, salario
from personas p 
WHERE funcion <> 'conserje'
AND salario > 1500
ORDER BY apellidos ASC;

/* 14. Mostrar los datos de las personas que sean de MURCIA o CARTAGENA y que
pertenezcan al hospital número 1. */
SELECT apellidos, localidad, cod_hospital
FROM personas p
WHERE localidad IN ('murcia', 'cartagena')
AND cod_hospital = 1;

/* 15. Obtén los apellidos en mayúsculas de las personas que trabajen en el hospital 
número 1. */
SELECT UCASE(apellidos) as apellidos_mayuscula, cod_hospital
FROM personas p
WHERE cod_hospital = 1;

/* 16. Con una consulta devuelve los apellidos de todas las personas. Al lado debe aparecer
la longitud de cada apellido. */
SELECT apellidos, LENGTH(apellidos) as longitud_apellidos
FROM personas p;

/* 17. Obtener los apellidos y localidad en minúscula de todas aquellas personas que no
trabajen en el hospital número 1 */
SELECT LOWER(apellidos) as apellidos_minuscula, localidad, cod_hospital
FROM personas p
WHERE cod_hospital <> 1;

/* 18. Obtener los datos de las personas que trabajen en los hospitales 1 ó 2 y tengan un
salario superior a 1500 euros. */
SELECT apellidos, cod_hospital, salario
FROM personas p
WHERE cod_hospital IN (1, 2)
AND salario > 1500;

/* 19. Visualizar los datos de aquellas personas que no trabajen en el hospital número 2 y
que sean de MURCIA. */
SELECT apellidos, cod_hospital, localidad
FROM personas p
WHERE cod_hospital <> 2
AND localidad = 'murcia';