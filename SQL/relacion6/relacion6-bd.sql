-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 14, 2024 at 01:33 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `relacion6`
--

-- --------------------------------------------------------

--
-- Table structure for table `hospitales`
--

CREATE TABLE `hospitales` (
  `cod_hospital` varchar(5) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `num_plazas` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hospitales`
--

INSERT INTO `hospitales` (`cod_hospital`, `nombre`, `direccion`, `num_plazas`) VALUES
('1', 'Rafael Méndez', 'Gran Vía, 7', 250),
('2', 'Reina Sofía', 'Junterones, 5', 225),
('3', 'Principe Asturias', 'Avenida Colón', 150),
('4', 'Virgen de la Arrixaca', 'Avenida Juan Carlos, I', 250);

-- --------------------------------------------------------

--
-- Table structure for table `personas`
--

CREATE TABLE `personas` (
  `cod_hospital` varchar(5) NOT NULL,
  `dni` varchar(8) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `funcion` varchar(20) NOT NULL,
  `salario` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `personas`
--

INSERT INTO `personas` (`cod_hospital`, `dni`, `apellidos`, `funcion`, `salario`) VALUES
('1', '12345678', 'Garcia Hernández, Eladio', 'CONSERJE', 1500),
('4', '22233311', 'Martínez Molina, Gloria', 'MEDICO', 1600),
('2', '22233322', 'Tristán García, Ana', 'MEDICO', 1900),
('2', '22233333', 'Martínez Molina, Andrés', 'MEDICO', 1600),
('4', '33222111', 'Mesa del Castillo, Juan', 'MEDICO', 2200),
('3', '55544411', 'Ruiz Hernández, Caridad', 'MEDICO', 1900),
('4', '55544412', 'Jiménez Jiménez, Dolores', 'CONSERJE', 1200),
('2', '55544433', 'González Marín, Alicia', 'CONSERJE', 1200),
('1', '66655544', 'Castillo Montes, Pedro', 'MEDICO', 1700),
('1', '87654321', 'Fuentes Bermejo, Carlos', 'DIRECTOR', 2000),
('3', '99988333', 'Serrano Díaz, Alejandro', 'DIRECTOR', 2400);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
