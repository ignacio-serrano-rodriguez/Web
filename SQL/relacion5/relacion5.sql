-- 1. Obtener el código, el tipo, el color y el premio de todos los maillots que hay.
SELECT * 
from MAILLOT m;

/* 2. Obtener el dorsal y el nombre de los ciclistas cuya edad sea menor o igual que 25
años. */
SELECT c.DORSAL, c.NOMBRE
from CICLISTA c
WHERE c.EDAD <= 25;

-- 3. Obtener el nombre y la altura de todos los puertos de categoría ʻEʼ (Especial).
SELECT p.ID, p.ALTURA
from PUERTO p
WHERE p.CATEGORIA = 'e';

/* 4. Obtener el valor del atributo netapa de aquellas etapas con salida y llegada en la
misma ciudad. */
SELECT *
FROM ETAPA e
WHERE e.SALIDA = e.LLEGADA;

-- 5. ¿Cuántos ciclistas hay?
SELECT COUNT(*) as 'Número de ciclistas' 
FROM CICLISTA c;

-- 6. ¿Cuántos ciclistas hay con edad superior a 25 años?
SELECT COUNT(*) as 'Número de ciclistas con edad > 25' 
FROM CICLISTA c
WHERE c.EDAD > 25;

-- 7. ¿Cuántos equipos hay?
SELECT COUNT(*) as 'Número de equipos'
FROM EQUIPO e;

-- 8. Obtener la media de edad de los ciclistas.
SELECT AVG(c.EDAD) as 'Edad media de los ciclistas' 
FROM CICLISTA c;

-- 9. Obtener la altura mínima y máxima de los puertos de montaña.
SELECT MIN(p.ALTURA) as 'altura mínima', MAX(p.ALTURA) as 'altura máxima'  
FROM PUERTO p;

-- 10. Obtener el nombre de cada ciclista junto con el nombre del equipo al que pertenece
SELECT 
	c.NOMBRE, 
	(SELECT e.NOMBRE
		FROM EQUIPO e
		WHERE c.EQUIPO_EQUIPO = e.EQUIPO) as 'EQUIPO'
FROM CICLISTA c;

-- 11. Obtener el nombre de los ciclistas que sean de Banesto.
SELECT c.NOMBRE
FROM CICLISTA c
WHERE c.EQUIPO_EQUIPO IN 
	(SELECT e.EQUIPO
	FROM EQUIPO e
	WHERE e.NOMBRE = 'banesto');

-- 12. ¿Cuántos ciclistas pertenecen al equipo Amore Vita?
SELECT COUNT(*) as 'Número de ciclistas que pertenecen a Amore Vita' 
FROM CICLISTA c
WHERE c.EQUIPO_EQUIPO IN 
	(SELECT e.EQUIPO
	FROM EQUIPO e
	WHERE e.NOMBRE = 'amore vita');

-- 13. Edad media de los ciclistas del equipo TVM.
SELECT AVG(c.EDAD) as 'Edad media del equipo TVM'
FROM CICLISTA c
WHERE c.EQUIPO_EQUIPO IN 
	(SELECT e.EQUIPO
	FROM EQUIPO e
	WHERE e.NOMBRE = 'tvm');

-- 14. Nombre de los ciclistas que pertenezcan al mismo equipo que Miguel Indurain.
SELECT c.NOMBRE
FROM CICLISTA c
WHERE c.EQUIPO_EQUIPO IN 
	(SELECT c2.EQUIPO_EQUIPO
		FROM CICLISTA c2 
		WHERE c2.NOMBRE = 'miguel indurain')
AND c.NOMBRE <> 'miguel indurain';

-- 15. Nombre de los ciclistas que han ganado alguna etapa.
SELECT c.NOMBRE
FROM CICLISTA c
WHERE c.DORSAL IN
	(SELECT e.CICLISTA_DORSAL
	FROM ETAPA e);

-- 16. Nombre de los ciclistas que han llevado maillots amarillos.
SELECT c.NOMBRE
FROM CICLISTA c
WHERE c.DORSAL IN
	(SELECT l.CICLISTA_DORSAL
	FROM LLEVAR l
	WHERE l.MAILLOT_CODIGO IN
		(SELECT m.CODIGO
		FROM MAILLOT m
		WHERE m.COLOR = 'amarillo'));

-- 17. Obtener el nombre del ciclista más joven
SELECT c.NOMBRE
FROM CICLISTA c
WHERE c.EDAD =
	(SELECT MIN(c2.EDAD) 
	FROM CICLISTA c2);

-- 18. Obtener el número de ciclistas de cada equipo.
SELECT 
	e.NOMBRE,
	(SELECT COUNT(*)
		FROM CICLISTA c
		WHERE e.EQUIPO = c.EQUIPO_EQUIPO) as 'Número de ciclistas'
FROM EQUIPO e;

-- 19. Obtener el nombre de los equipos que tengan más de 5 ciclistas.
SELECT 
	e.NOMBRE
FROM EQUIPO e
WHERE 
	(SELECT COUNT(*)
		FROM CICLISTA c
		WHERE e.EQUIPO = c.EQUIPO_EQUIPO)> 5;

-- 20. Obtener el número de puertos que ha ganado cada ciclista.
SELECT
	c.NOMBRE,
	(SELECT COUNT(*)
		FROM PUERTO p
		WHERE c.DORSAL = p.CICLISTA_DORSAL) as 'Número de puertos ganados'
FROM CICLISTA c;

-- 21. Obtener el nombre de los ciclistas que han ganado más de un puerto.
SELECT c.NOMBRE
FROM CICLISTA c
WHERE 
	(SELECT COUNT(*)
		FROM PUERTO p
		WHERE c.DORSAL = p.CICLISTA_DORSAL) > 1;

-- 22. Nombre de los ciclistas que no hayan ganado ninguna etapa.
SELECT c.NOMBRE
FROM CICLISTA c
WHERE 
	(SELECT COUNT(*)
		FROM ETAPA e
		WHERE c.DORSAL = e.CICLISTA_DORSAL) = 0;

-- 23. Nombre de los ciclistas que no hayan ganado ningún puerto de montaña.
SELECT c.NOMBRE
FROM CICLISTA c
WHERE c.DORSAL NOT IN
	(SELECT p.CICLISTA_DORSAL
		FROM PUERTO p);

-- 24. Nombre de los ciclistas que hayan ganado más de un puerto de montaña.
SELECT c.NOMBRE
FROM CICLISTA c
WHERE 
	(SELECT COUNT(*)
		FROM PUERTO p
		WHERE c.DORSAL = p.CICLISTA_DORSAL) > 1;

-- 25. De cada equipo obtener la edad media, la máxima edad y la mínima edad.
SELECT 
	e.NOMBRE,
	(SELECT AVG(c.EDAD)
		FROM CICLISTA c
		WHERE e.EQUIPO = c.EQUIPO_EQUIPO) as 'EDAD MEDIA',
	(SELECT MAX(c.EDAD)
		FROM CICLISTA c
		WHERE e.EQUIPO = c.EQUIPO_EQUIPO) as 'EDAD MÁXIMA',
	(SELECT MIN(c.EDAD)
		FROM CICLISTA c
		WHERE e.EQUIPO = c.EQUIPO_EQUIPO) as 'EDAD MÍNIMA'
FROM EQUIPO e;

-- 26. Nombre de los ciclistas que han ganado la etapa que comienza en Zamora.
SELECT c.NOMBRE
FROM CICLISTA c
WHERE c.DORSAL IN
	(SELECT e.CICLISTA_DORSAL
		FROM ETAPA e
		WHERE e.SALIDA = 'zamora');

-- 27. Obtén el nombre y la categoría de los puertos ganados por ciclistas del equipo ʻBanestoʼ.
SELECT 
	c.NOMBRE,
	(SELECT p.CATEGORIA
		FROM PUERTO p
		WHERE c.DORSAL = p.CICLISTA_DORSAL) as 'CATEGORIA'
FROM CICLISTA c
WHERE c.EQUIPO_EQUIPO IN
	(SELECT e.EQUIPO
		FROM EQUIPO e
		WHERE e.NOMBRE = 'banesto');

/* 28. Obtener el nombre de cada puerto indicando el número (IDETAPA) y los kilómetros
de la etapa en la que se encuentra el puerto. */
SELECT 
	e.IDETAPA,
	e.KM,
	(SELECT p.ID
		FROM PUERTO p
		WHERE e.IDETAPA = p.ETAPA_IDETAPA) as 'IDPUERTO'
FROM ETAPA e;	

-- 29. Obtener el nombre de los ciclistas con el color de cada maillot que hayan llevado.
SELECT 
	c.NOMBRE,
	(SELECT CONCAT(m.COLOR)
		FROM MAILLOT m
		WHERE m.CODIGO IN
		((SELECT l.MAILLOT_CODIGO
			FROM LLEVAR l
			WHERE c.DORSAL = l.CICLISTA_DORSAL) )) as 'COLOR MAILLOT'
FROM CICLISTA c;

-- 30. Obtener la edad media de los ciclistas que han ganado alguna etapa.
SELECT AVG(c.EDAD) as 'Edad media ciclistas que han ganado alguna etapa'
FROM CICLISTA c
WHERE c.DORSAL IN
	(SELECT e.CICLISTA_DORSAL
		FROM ETAPA e);

-- 31. Selecciona el nombre de los puertos con una altura superior a la altura media de todos los puertos.
SELECT p.ID
FROM PUERTO p
WHERE p.ALTURA >
	(SELECT AVG(p2.ALTURA)
		FROM PUERTO p2);

/* 32. Obtener el nombre de la ciudad de salida y de llegada de la etapa donde esté el puerto 
con mayor pendiente. */
SELECT e.SALIDA, e.LLEGADA
FROM ETAPA e
WHERE e.IDETAPA IN
	(SELECT p.ETAPA_IDETAPA
		FROM PUERTO p
		WHERE p.PENDIENTE IN
			(SELECT MAX(p2.PENDIENTE)
				FROM PUERTO p2));

-- 33. Obtener el dorsal y el nombre del ciclista que ha ganado el puerto de mayor altura.
SELECT c.DORSAL, c.NOMBRE
FROM CICLISTA c
WHERE c.DORSAL IN
	(SELECT p.ID 
		FROM PUERTO p
		WHERE p.ALTURA IN
			(SELECT MAX(p2.ALTURA)
				FROM PUERTO p2));

-- 34. Obtener el nombre del ciclista más joven que ha ganado al menos una etapa.
SELECT c.NOMBRE, c.EDAD
FROM CICLISTA c 
WHERE c.DORSAL IN
	(SELECT e.CICLISTA_DORSAL
		FROM ETAPA e)
ORDER BY c.EDAD
LIMIT 1;

/* 35. Obtener el dorsal y el nombre de los ciclistas tales que todas las etapas que han
ganado tienen más de 170 km (es decir que sólo han ganado etapas de más de 170 km). */
SELECT c.DORSAL, c.NOMBRE
FROM CICLISTA c
WHERE c.DORSAL IN
	(SELECT e.CICLISTA_DORSAL
		FROM ETAPA e
		WHERE e.KM > 170);

-- 36. Obtener el nombre de todos los equipos indicando cuántos ciclistas tiene cada uno.
SELECT e.NOMBRE,
	(SELECT COUNT(*) 
		FROM CICLISTA c
		WHERE e.EQUIPO = c.EQUIPO_EQUIPO) as 'Número de ciclistas'
FROM EQUIPO e;

/* 37. Obtener el nombre de los equipos y la edad media de sus ciclistas de aquellos equipos
que tengan la media de edad máxima de todos los equipos. */
SELECT e.NOMBRE,
	(SELECT AVG(c.EDAD) 
		FROM CICLISTA c
		WHERE e.EQUIPO = c.EQUIPO_EQUIPO) as 'Edad media de los ciclistas'
FROM EQUIPO e;

/* 38. Obtener el valor del atributo idetapa, la ciudad de salida y la ciudad de llegada de las
etapas de más de 190 km y que tengan por lo menos dos puertos. */
SELECT e.IDETAPA, e.SALIDA, e.LLEGADA
FROM ETAPA e
WHERE e.KM > 190
AND (SELECT COUNT(*) 
		FROM PUERTO p
		WHERE e.IDETAPA = p.ETAPA_IDETAPA) >= 2;

/* 39. Obtener el dorsal y nombre de los ciclistas que han llevado exactamente los mismos
maillots que ha llevado el ciclista de dorsal 1. */
SELECT DORSAL, NOMBRE
FROM CICLISTA c
WHERE 
	(SELECT COUNT(*) 
		FROM LLEVAR l
		WHERE c.DORSAL = l.CICLISTA_DORSAL) = 
	(SELECT COUNT(*) 
		FROM LLEVAR l
		WHERE l.CICLISTA_DORSAL = 1)

/* 40. Obtener el dorsal y el nombre de los ciclistas que han llevado dos tipos de maillot
menos de los que ha llevado el ciclista de dorsal 3. */
SELECT DORSAL, NOMBRE
FROM CICLISTA c
WHERE 
	(SELECT COUNT(*) 
		FROM LLEVAR l
		WHERE c.DORSAL = l.CICLISTA_DORSAL) + 2 = 
	(SELECT COUNT(*) 
		FROM LLEVAR l
		WHERE l.CICLISTA_DORSAL = 3)