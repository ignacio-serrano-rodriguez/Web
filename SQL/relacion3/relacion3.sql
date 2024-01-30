-- 1. Averigua el DNI de todos los clientes.
SELECT dni
from cliente c;

-- 2. Consulta todos los datos de todos los programas.
SELECT *
from programa p;

-- 3. Obtén un listado con los nombres de todos los programas.
SELECT nombre
from programa p;

-- 4. Genera una lista con todos los comercios.
SELECT *
from comercio c;

/* 5. Genera una lista de las ciudades con establecimientos donde se venden programas, sin
que aparezcan valores duplicados. */
SELECT DISTINCT ciudad
FROM comercio c
INNER JOIN distribuye d ON c.CIF = d.CIF;

-- 6. Obtén una lista con los nombres de programas, sin que aparezcan valores duplicados.
SELECT DISTINCT nombre
FROM programa p;

-- 7. Obtén el DNI más 4 de todos los clientes.
SELECT dni+4 
FROM cliente c;

-- 8. Haz un listado con los códigos de los programas multiplicados por 7.
SELECT código*7
FROM programa p;

-- 9. ¿Cuáles son los programas cuyo código es inferior o igual a 10?
SELECT *
FROM programa p
WHERE código <= 10;

-- 10. ¿Cuál es el programa cuyo código es 11?
SELECT *
FROM programa p
WHERE código = 11;

-- 11. ¿Qué fabricantes son de Estados Unidos?
SELECT *
FROM fabricante f
WHERE país = 'estados unidos';

-- 12. ¿Cuáles son los fabricantes no españoles?
SELECT *
FROM fabricante f
WHERE país = 'españa';

-- 13. Obtén un listado con los códigos de las distintas versiones de Windows.
SELECT nombre, versión, código
FROM programa p
WHERE nombre = 'windows';

-- 14. ¿En qué ciudades comercializa programas El Corte Inglés?
SELECT DISTINCT nombre, ciudad
FROM comercio c
WHERE nombre = 'el corte inglés';

-- 15. ¿Qué otros comercios hay, además de El Corte Inglés?
SELECT DISTINCT nombre
FROM comercio c
WHERE nombre <> 'el corte inglés';

-- 16. Genera una lista con los códigos de las distintas versiones de Windows y Access.
SELECT nombre, versión, código
FROM programa p
WHERE nombre IN ('windows', 'access');

/* 17. Obtén un listado que incluya los nombres de los clientes de edades comprendidas
entre 10 y 25 y de los mayores de 50 años. Da una solución con BETWEEN y otra sin
BETWEEN. */

	-- BETWEEN
	SELECT *
	FROM cliente c
	WHERE edad BETWEEN 10 AND 25
	OR edad > 50;

	-- SIN BETWEEN
	SELECT *
	FROM cliente c
	WHERE edad >= 10 AND edad <= 25
	OR edad > 50;

/* 18. Saca un listado con los comercios de Sevilla y Madrid. No se admiten valores
duplicados. */
SELECT DISTINCT *
FROM comercio c
WHERE ciudad IN ('sevilla','madrid');

-- 19. ¿Qué clientes terminan su nombre en la letra “o”?
SELECT *
FROM cliente c
WHERE nombre LIKE '%o';

-- 20. ¿Qué clientes terminan su nombre en la letra “o” y, además, son mayores de 30 años?
SELECT *
FROM cliente c
WHERE nombre LIKE '%o'
AND edad > 30;

/* 21. Obtén un listado en el que aparezcan los programas cuya versión finalice por una letra
i, o cuyo nombre comience por una A o por una W. */
SELECT *
FROM programa p
WHERE versión LIKE '%i'
OR nombre LIKE 'a%'
OR nombre LIKE 'w%';

/* 22. Obtén un listado en el que aparezcan los programas cuya versión finalice por una letra
i, o cuyo nombre comience por una A y termine por una S. */
SELECT *
FROM programa p
WHERE versión LIKE '%i'
OR nombre LIKE 'a%'
AND nombre LIKE '%s';

/* 23. Obtén un listado en el que aparezcan los programas cuya versión finalice por una letra
i, y cuyo nombre no comience por una A */
SELECT *
FROM programa p
WHERE versión LIKE '%i'
AND nombre NOT LIKE 'a%';

-- 24. Obtén una lista de empresas por orden alfabético ascendente.
SELECT nombre
FROM comercio c
ORDER BY nombre ASC;

-- 25. Genera un listado de empresas por orden alfabético descendente.
SELECT nombre
FROM comercio c
ORDER BY nombre DESC;

-- 26. Obtén un listado de programas por orden de versión.
SELECT *
FROM programa p
ORDER BY versión;

-- 27. Genera un listado de los programas que desarrolla Oracle.
SELECT p.código, p.nombre, f.nombre
FROM programa p
INNER JOIN fabricante f ON p.id_fab = f.id_fab
WHERE f.nombre = 'oracle';

-- 28. ¿Qué comercios distribuyen Windows?
SELECT c.nombre
from comercio c
INNER JOIN distribuye d ON c.CIF = d.CIF
INNER JOIN programa p ON d.código = p.código
WHERE p.nombre = 'windows';

-- 29. Genera un listado de los programas y cantidades que se han distribuido a El Corte
-- Inglés de Madrid.
SELECT c.nombre, c.ciudad, p.nombre, d.cantidad
from comercio c
INNER JOIN distribuye d ON c.CIF = d.CIF
INNER JOIN programa p ON d.código = p.código
WHERE c.nombre = 'el corte ingles'
AND c.ciudad = 'madrid';

-- 30. ¿Qué fabricante ha desarrollado Freddy Hardest?
SELECT p.nombre, f.nombre
FROM programa p
INNER JOIN fabricante f ON p.id_fab = f.id_fab
WHERE f.nombre = 'freddy hardest';

-- 31. Selecciona el nombre de los programas que se registran por Internet.
	
	-- inner join
	SELECT p.nombre, r.medio
	FROM programa p
	INNER JOIN registra r ON p.código  = r.código 
	WHERE r.medio  = 'internet';

	-- subconsulta
	SELECT p.nombre, r.medio 
	FROM programa p, registra r
	WHERE p.código IN
		(SELECT r.código 
		FROM registra r
		WHERE medio="internet");

-- 32. Selecciona el nombre de las personas que se registran por Internet.
	



-- 33. ¿Qué medios ha utilizado para registrarse Pepe Pérez?
-- 34. ¿Qué usuarios han optado por Internet como medio de registro? (es igual que la 32)
-- 35. ¿Qué programas han recibido registros por tarjeta postal?
-- 36. ¿En qué ciudades se han vendido productos que se han registrado por Internet?
-- 37. Obtén un listado de los nombres de las personas que se han registrado por Internet,
-- junto al nombre de los programas para los que ha efectuado el registro. 37 b) Además
-- el nombre del fabricante debe ser microsoft.
-- 38. Genera un listado en el que aparezca cada cliente junto al programa que ha registrado,
-- el medio con el que lo ha hecho y el comercio en el que lo ha adquirido.
-- 39. Genera un listado con las ciudades en las que se pueden obtener los productos de
-- Oracle.
-- 40. Obtén el nombre de los usuarios que han registrado Excel.
-- 41. Nombre de aquellos fabricantes cuyo país es el mismo que ʻOracleʼ. (Subconsulta).
-- 42. Nombre de aquellos clientes que tienen la misma edad que Pepe Pérez. (Subconsulta).
-- 43. Genera un listado con los comercios que tienen su sede en la misma ciudad que tiene
-- el comercio ʻFNACʼ. (Subconsulta).
-- 44. Nombre de aquellos clientes que han registrado un producto de la misma forma que el
-- cliente ʻPepe Pérezʼ. (Subconsulta).
-- 45. Obtener el número de programas que hay en la tabla programas.
-- 46. Calcula el número de clientes cuya edad es mayor de 40 años.
-- 47. Calcula el número de productos que ha vendido el establecimiento cuyo CIF es 1.
-- 48. Calcula la media de programas que se venden cuyo código es 7.
-- 49. Calcula la mínima cantidad de programas de código 7 que se ha vendido.
-- 50. Calcula la máxima cantidad de programas de código 7 que se ha vendido.
-- 51. ¿En cuántos establecimientos se vende el programa cuyo código es 7?
-- 52. Calcular el número de registros que se han realizado por Internet.
-- 53. Obtener el número total de programas que se han vendido en ʻSevillaʼ.
-- 54. Calcular el número total de programas que han desarrollado los fabricantes cuyo país
-- es ʻEstados Unidosʼ.
-- 55. Visualiza el nombre de todos los clientes en mayúscula. En el resultado de la consulta
-- debe aparecer también la longitud de la cadena nombre.
-- 56. Con una consulta concatena los campos nombre y versión de la tabla PROGRAMA.