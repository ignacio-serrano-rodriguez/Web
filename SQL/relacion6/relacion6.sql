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
DELETE FROM hospitales
WHERE nombre LIKE 'R%';

-- 9. Dobla el número de plazas de todos los hospitales.
UPDATE hospitales  
SET num_plazas = num_plazas*2;
