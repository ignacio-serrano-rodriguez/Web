-- Relación 1

-- 1. Mostrar todos los datos de todas las personas.
SELECT *
FROM personas p;

-- 2. Obtén el DNI, apellidos y función de todas las personas
SELECT dni as DNI, apellidos, funcion
FROM personas p;

-- 3. Mostrar los apellidos de las personas que vivan en LORCA.
	
	-- 3.1 WHERE
	SELECT apellidos, localidad
	from personas p 
	where localidad = 'lorca';

	-- 3.2 WHERE IN
	SELECT apellidos, localidad
	from personas p 
	where localidad in ('lorca');

-- 4. Mostrar los apellidos de las personas que vivan en MURCIA o LORCA
	
	-- 4.1 WHERE
	SELECT apellidos, localidad 
	from personas p 
	where localidad = 'lorca' OR localidad = 'murcia';

	-- 4.2 WHERE IN
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
where salario > 1500
and funcion = 'director';

/* 7. Mostrar los datos de las personas cuya función sea MÉDICO ordenados por apellidos
descendentemente. */
SELECT apellidos, funcion
from personas p 
where funcion = 'medico'
ORDER BY apellidos ASC;

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