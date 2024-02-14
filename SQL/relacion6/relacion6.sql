-- PRIMERA PARTE --

/* 1. Insertar a un persona de apellidos y nombre ʻQuiroga Rojas, Leopoldoʼ, cuya función
sea ʻCONSERJEʼ, con DNI 456788999 y con el código de hospital 4. */
INSERT INTO personas (cod_hospital, dni, apellidos, funcion, salario)
VALUES ('4', '45678899', 'Quiroga Rojas, Leopoldo', 'CONSERJE', 0);

/* 2. Inserta en la tabla PERSONAS una persona de nombre ʻSerrano Ruiz, Antonioʼ, con
DNI 111333222 perteneciente al hospital número 3. */
INSERT INTO personas (cod_hospital, dni, apellidos, funcion, salario)
VALUES ('3', '11133322', 'Serrano Ruiz, Antonio', '', 0);

/* 3. Inserta en la tabla PERSONAS1 los datos de las personas que trabajan en el hospital
número 1. */

    -- Creamos la tabla (PERSONAS1)
    CREATE TABLE PERSONAS1 (
        cod_hospital varchar(5) NOT NULL,
        dni varchar(8) NOT NULL,
        apellidos varchar(50) NOT NULL,
        funcion varchar(20) NOT NULL,
        salario int(255) NOT NULL
    );

    -- Insertamos en (PERSONAS1) las filas de (personas) que tengan cod_hospital = 1
    INSERT INTO PERSONAS1 (cod_hospital, dni, apellidos, funcion, salario)
    SELECT cod_hospital, dni, apellidos, funcion, salario
    FROM personas
    WHERE cod_hospital = '1';

/* 4. Se ha creado una nueva tabla llamada PERSONAS2. Esta tabla tiene los siguientes
campos (DNI, APELLIDOS, FUNCIÓN). ¿Cómo podremos introducir en esa tabla 
los datos de las PERSONAS del código de hospital 4? */

    -- Creamos la tabla (PERSONAS2) con los campos indicados
    CREATE TABLE PERSONAS2 (
        dni varchar(8) NOT NULL,
        apellidos varchar(50) NOT NULL,
        funcion varchar(20) NOT NULL
    );

    -- Insertamos en (PERSONAS2) las filas de (personas) que tengan cod_hospital = 4
    INSERT INTO PERSONAS2 (dni, apellidos, funcion)
      SELECT dni, apellidos, funcion
      FROM personas
      WHERE cod_hospital = '4';

/* 5. En la tabla HOSPITALES cambiar el código de los hospitales que tienen el código 3
al código 4. */
UPDATE hospitales 
SET cod_hospital=4 
WHERE cod_hospital=3;

-- 6. Establecer el número de plazas de todos los hospitales a 250.
UPDATE hospitales 
SET num_plazas=250;

-- 7. Poner en 2000 el número de plazas del hospital número 3.
UPDATE hospitales 
SET num_plazas=2000
WHERE cod_hospital=3;

-- 8. Borra todos los hospitales cuyo nombre comience por la letra ʻRʼ.
DELETE 
FROM hospitales
WHERE nombre LIKE 'R%';

-- 9. Dobla el número de plazas de todos los hospitales.
UPDATE hospitales  
SET num_plazas = num_plazas*2;

-- SEGUNDA PARTE --
-- Insertamos las tablas y los datos que nos pide la segunda parte

CREATE TABLE `emple` (
	`emp_no` varchar(100) NOT NULL,
	`apellido` varchar(100) DEFAULT NULL,
	`oficio` varchar(100) DEFAULT NULL,
	`dir` varchar(100) DEFAULT NULL,
	`fecha_alt` date DEFAULT NULL,
	`salario` int(11) DEFAULT NULL,
	`comision` int(11) DEFAULT NULL,
	`dept_no` varchar(100) DEFAULT NULL,
	PRIMARY KEY (`emp_no`)
);

INSERT INTO emple (emp_no,apellido,oficio,dir,fecha_alt,salario,comision,dept_no) VALUES
	('7369','SÁNCHEZ','EMPLEADO','7902','1980-12-17',104000,NULL,'20'),
	('7499','ARROYO','VENDEDOR','7698','1980-02-20',208000,39000,'30'),
	('7521','SALA','VENDEDOR','7698','1981-02-22',162500,162500,'30'),
	('7566','JIMÉNEZ','DIRECTOR','7839','1981-04-02',386750,NULL,'20'),
	('7654','MARTÍN','VENDEDOR','7698','1981-09-29',162500,182000,'30'),
	('7698','NEGRO','DIRECTOR','7839','1981-05-01',370500,NULL,'30'),
	('7788','GIL','ANALISTA','7566','1981-11-09',390000,NULL,'20'),
	('7839','REY','PRESIDENTE',NULL,'1981-11-17',650000,NULL,'10'),
	('7844','TOVAR','VENDEDOR','7698','1981-09-08',195000,0,'30'),
	('7876','ALONSO','EMPLEADO','7788','1981-09-23',143000,NULL,'20'),
	('7900','JIMENO','EMPLEADO','7698','1981-12-03',1235000,NULL,'30'),
	('7902','FERNÁNDEZ','ANALISTA','7566','1981-12-03',390000,NULL,'20'),
	('7934','MUÑOZ','EMPLEADO','7782','1982-01-23',169000,NULL,'10');

CREATE TABLE `depart` (
	`dept_no` varchar(100) NOT NULL,
	`dnombre` varchar(100) DEFAULT NULL,
	`loc` varchar(100) DEFAULT NULL,
	PRIMARY KEY (`dept_no`)
);

INSERT INTO depart (dept_no,dnombre,loc) VALUES
	('10','CONTABILIDAD','SEVILLA'),
	('20','INVESTIGACIÓN','MADRID'),
	('30','VENTAS','BARCELONA'),
	('40','PRODUCCIÓN','BILBAO');

/* 1. Insertar en la tabla EMPLE un empleado con código 9999, apellido ʻGONZÁLEZʼ y
código de departamento 10. */
INSERT INTO emple (emp_no, apellido, dept_no)
VALUES ('9999', 'GONZÁLEZ', 10);

/* 2. Insertar en la tabla EMPLE un empleado con código 5000, apellido ʻMORAGAʼ,
oficio ʻEMPLEADOʼ, su director es el empleado 7902, la fecha de alta en la empresa
es ʻ17/10/99ʼ, su salario es 100000, no tiene comisión y pertenece al departamento
número 20. */
INSERT INTO emple (emp_no, apellido, oficio, dir, fecha_alt, salario, comision, dept_no)
VALUES ('5000', 'MORAGA', 'EMPLEADO', '7902', '1999-10-17', 100000, 0, 20);

/* 3. Insertar en la tabla DEPART un departamento cuyo número sea 50, de nombre
ʻGENERALʼ y cuya localización sea ʻSEVILLAʼ. */
INSERT INTO depart (dept_no, dnombre, loc)
VALUES ('50', 'GENERAL', 'SEVILLA');

/* 4. Insertar en la tabla DEPART un departamento cuyo número sea 60 y de nombre
ʻPRUEBASʼ. */
INSERT INTO depart (dept_no, dnombre)
VALUES ('60', 'PRUEBAS');

/* 5. Insertar en la tabla EMPLE30 los datos de los empleados que pertenecen al
departamento número 30. */

  -- Crear tabla
  CREATE TABLE `EMPLE30` (
    `emp_no` varchar(100) NOT NULL,
    `apellido` varchar(100) DEFAULT NULL,
    `oficio` varchar(100) DEFAULT NULL,
    `dir` varchar(100) DEFAULT NULL,
    `fecha_alt` date DEFAULT NULL,
    `salario` int(11) DEFAULT NULL,
    `comision` int(11) DEFAULT NULL,
    `dept_no` varchar(100) DEFAULT NULL,
    PRIMARY KEY (`emp_no`)
  );

	-- Insertar datos con las condiciones indicadas
	INSERT INTO EMPLE30 (emp_no, apellido, oficio, dir, fecha_alt, salario, comision, dept_no)
		SELECT emp_no, apellido, oficio, dir, fecha_alt, salario, comision, dept_no
		FROM emple
		WHERE dept_no = '30';

/* 6. Insertar en la tabla EMPLE20 el emp_no, número de departamento y salario de los
empleados que pertenecen al departamento número 20. */

	-- Creación de la tabla
	CREATE TABLE `EMPLE20` (
		`emp_no` varchar(100) NOT NULL,
		`salario` int(11) DEFAULT NULL,
		`dept_no` varchar(100) DEFAULT NULL,
		PRIMARY KEY (`emp_no`)
	);

	-- Insercción de los datos indicados
	INSERT INTO EMPLE20 (emp_no, dept_no, salario)
		SELECT emp_no, dept_no, salario
		FROM emple
		WHERE dept_no = '20';

/* 7. Cambiar todos los empleados del departamento número 30 al departamento número 20.*/
UPDATE emple 
SET dept_no=20 
WHERE dept_no=30;

-- 8. Incrementar en un 10% el sueldo de los empleados del departamento 10.
UPDATE emple 
SET salario = salario *1.1 
WHERE dept_no=10;

-- 9. Cambiar la localidad del departamento número 10 a ʻBILBAOʼ.
UPDATE depart 
SET loc = 'BILBAO'
WHERE dept_no=10;

-- 10. Igualar el salario de ʻARROYOʼ al salario de ʻNEGROʼ, de la tabla EMPLE30.
UPDATE EMPLE30 
SET salario = 
(SELECT e.salario
    FROM EMPLE30 e
    WHERE e.apellido = 'negro')
WHERE apellido='arroyo';

/* 11. Igualar el salario y oficio de ʻMUÑOZʼ al salario y oficio de ʻJIMENOʼ, de la tabla
EMPLE30. */
UPDATE EMPLE30 
SET salario = 
(SELECT e.salario
    FROM EMPLE30 e
    WHERE e.apellido = 'jimeno')
WHERE apellido='muñoz';

-- 12. En la tabla DEPART borrar el departamento número 50.
DELETE 
FROM depart
WHERE dept_no = '50';

/* 13. En la tabla EMPLE borrar todos los empleados que sean del departamento 20 y sean
ʻANALISTASʼ. */
DELETE
FROM emple
WHERE dept_no = 20 AND oficio = 'analista';

-- 14. Borrar de la tabla EMPLE todos los empleados que no tengan comisión.
DELETE
FROM emple
WHERE comision IS NULL 
or comision = 0;