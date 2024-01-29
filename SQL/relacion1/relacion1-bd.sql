-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 29-01-2024 a las 12:06:24
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
-- Base de datos: `relacion1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `cod_hospital` int(11) DEFAULT NULL,
  `dni` varchar(100) NOT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `funcion` varchar(100) DEFAULT NULL,
  `salario` float DEFAULT NULL,
  `localidad` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`cod_hospital`, `dni`, `apellidos`, `funcion`, `salario`, `localidad`) VALUES
(1, '12345678', 'García Hernández, Eladio', 'CONSERJE', 1200, 'LORCA'),
(4, '22233311', 'Martinez Molina, Gloria', 'MEDICO', 1600, 'MURCIA'),
(2, '22233322', 'Tristán García, Ana', 'MEDICO', 1900, 'MURCIA'),
(2, '22233333', 'Martinez Molina, Andrés', 'MEDICO', 1600, 'CARTAGENA'),
(4, '3322211', 'Mesa del Castillo, Juan', 'MEDICO', 2200, 'LORCA'),
(3, '55544411', 'Ruiz Hernández, Caridad', 'MEDICO', 1900, 'LORCA'),
(4, '55544412', 'Jiménez Jiménez, Dolores', 'CONSERJE', 1200, 'MURCIA'),
(2, '55544433', 'González Marín, Alicia', 'CONSERJE', 1200, 'MURCIA'),
(1, '66655544', 'Castillo Montes, Pedro', 'MEDICO', 1700, 'MURCIA'),
(1, '87654321', 'Fuentes Bermejo, Carlos', 'DIRECTOR', 2000, 'MURCIA'),
(3, '99988333', 'Serrano Díaz, Alejandro', 'DIRECTOR', 2400, 'CARTAGENA');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`dni`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
