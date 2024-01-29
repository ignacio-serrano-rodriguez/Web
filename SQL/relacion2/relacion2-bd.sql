-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 29-01-2024 a las 19:13:07
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `relacion2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `expediente` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `localidad` varchar(100) DEFAULT NULL,
  `fecha_nac` date DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `curso` int(11) DEFAULT NULL,
  `nivel` varchar(100) DEFAULT NULL,
  `faltas` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`expediente`, `nombre`, `localidad`, `fecha_nac`, `direccion`, `curso`, `nivel`, `faltas`) VALUES
(123456, 'Juan Miguel Soler Bakero', 'Murcia', '1995-10-01', 'Gran Vía, 2, 4A', 1, 'ESO', 15),
(223322, 'Raquel Riquelme Rubio', 'Lorca', '0000-00-01', 'San Juan, 14, 3B', 1, 'BACHILLER', 7),
(334400, 'Javier Ramínez Rodríguez', 'Murcia', '1993-05-02', 'Gran Vía, 4, 3A', 3, 'ESO', 0),
(334455, 'Pedro Jesús Rodríguez', 'Alhama de Murcia', '1994-10-01', 'Camino de Badel, 4', 2, 'ESO', 11),
(445544, 'Juan Francisco Cano', 'Murcia', '1992-01-01', 'Plaza de Belluga, 3, 4A', 4, 'ESO', 13),
(554411, 'Joaquín Hernández', 'Lorca', '1991-12-01', 'Junterones, 4, 5A', 2, 'BACHILLER', 14),
(645321, 'Laura Gómez Fernández', 'Lorca', '1994-09-01', 'Junterones, 10, 5B', 2, 'ESO', 25),
(765432, 'Beatriz Martínez Hernández', 'Murcia', '1993-05-01', 'Plaza Mayor, 6, 3B', 3, 'ESO', 5),
(987654, 'Diego Marín Llorente', 'Alhama de Murcia', '1990-03-01', 'Diego de la Cierva, 5, 7A', 1, 'BACHILLER', 34),
(988877, 'Cristina Sánchez Bermejo', 'Murcia', '1995-10-00', 'Torre de Romo, 7', 1, 'ESO', 1),
(993322, 'Gema Rubio Colero', 'Lorca', '1992-09-01', 'Plaza Fuensanta, 5, 7A', 1, 'BACHILLER', 19);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`expediente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
