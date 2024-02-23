-- barcos
CREATE TABLE `Barcos` (
  `Matricula` varchar(20) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Clase` varchar(50) NOT NULL,
  `Armador` varchar(50) NOT NULL,
  `Capacidad` int(255) NOT NULL,
  `Nacionalidad` varchar(50) NOT NULL,
  PRIMARY KEY (`Matricula`)
);

--lotes
CREATE TABLE `Lotes` (
  `Codigo` varchar(20) NOT NULL,
  `CodEspecie` varchar(50) NOT NULL,
  `Matricula` varchar(50) NOT NULL,
  `NumKilos` int(255) NOT NULL,
  `PPKS` float NOT NULL,
  `PPKA` float NOT NULL,
  `FechaVenta` DATETIME NOT NULL,
  PRIMARY KEY (`Codigo`),
  CONSTRAINT `fk_Matricula` FOREIGN KEY (`Matricula`) REFERENCES `Barcos`(`Matricula`),
  CONSTRAINT `fk_CodEspecie` FOREIGN KEY (`CodEspecie`) REFERENCES `Especies`(`Codigo`)
);

--capturas
CREATE TABLE `Capturas` (
  `Codigo` varchar(20) NOT NULL,
  `CodEspecie` varchar(50) NOT NULL,
  `Matricula` varchar(50) NOT NULL,
  `codcaladero` varchar(50) NOT NULL,
  `NumKilos` int(255) NOT NULL,
  `Fecha` DATETIME NOT NULL,
  PRIMARY KEY (`Codigo`),
  CONSTRAINT `fk_MatriculaC` FOREIGN KEY (`Matricula`) REFERENCES `Barcos`(`Matricula`),
  CONSTRAINT `fk_CodEspecieC` FOREIGN KEY (`CodEspecie`) REFERENCES `Especies`(`Codigo`),
  CONSTRAINT `fk_codcaladeroC` FOREIGN KEY (`codcaladero`) REFERENCES `Caladeros`(`Codigo`)
);

--especies
CREATE TABLE `Especies` (
  `Codigo` varchar(20) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Tipo` varchar(50) NOT NULL,
  `CupoporBarco` int(255) NOT NULL,
  PRIMARY KEY (`Codigo`),
);

--caladero
CREATE TABLE `Caladeros` (
  `Codigo` varchar(20) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Extension` int(255) NOT NULL,
  `Ubicacion` varchar(50) NOT NULL,
  PRIMARY KEY (`Codigo`)
);

-- insercción de datos
INSERT INTO `Caladeros` (`Codigo`, `Nombre`, `Extension`, `Ubicacion`) VALUES
('1', 'caladero 1', 1001, 'ubicacion 1'),
('2', 'caladero 2', 1002, 'ubicacion 2'),
('3', 'caladero 3', 1003, 'ubicacion 3'),
('4', 'caladero 4', 1004, 'ubicacion 4');

INSERT INTO `Especies` (`Codigo`, `Nombre`, `Tipo`, `CupoporBarco`) VALUES
('1', 'sardina', 'pescado azul', 2);

INSERT INTO `Barcos` (`Matricula`, `Nombre`, `Clase`, `Armador`, `Capacidad`, `Nacionalidad`) VALUES
('1', 'SSI Enterprise', 'A', 'Nacho', 2000, 'Espaniola');

INSERT INTO `Capturas` (`Codigo`, `CodEspecie`, `Matricula`, `codcaladero`, `NumKilos`, `Fecha`) VALUES
('1', '1', '1', '1', 1001, '2006-02-15 04:34:33');

-- actualizacion
UPDATE `Caladeros`
SET `Nombre`= 'El caladero gaditano'
WHERE `Codigo`=1;

-- borrado
DELETE 
FROM `Caladeros`
WHERE `Nombre` LIKE '%3';

SELECT *
FROM Barcos b 
WHERE b.Matricula IN
	(SELECT c.Matricula
	FROM Capturas c
	WHERE c.NumKilos > 1200
	AND c.CodEspecie IN
		(SELECT e.Codigo
		FROM Especies e
		WHERE e.Nombre = 'sardina')
	AND c.codcaladero IN
		(SELECT c.Codigo
		FROM Caladeros c
		WHERE c.Nombre = 'Terranova' ));