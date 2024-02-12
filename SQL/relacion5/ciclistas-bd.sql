-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 13, 2024 at 12:22 AM
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
-- Database: `ciclistas`
--

-- --------------------------------------------------------

--
-- Table structure for table `CICLISTA`
--

CREATE TABLE `CICLISTA` (
  `DORSAL` int(11) NOT NULL,
  `NOMBRE` varchar(45) NOT NULL,
  `EDAD` int(11) NOT NULL,
  `EQUIPO_EQUIPO` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `CICLISTA`
--

INSERT INTO `CICLISTA` (`DORSAL`, `NOMBRE`, `EDAD`, `EQUIPO_EQUIPO`) VALUES
(1, 'Miguel Indurain', 30, 1),
(2, 'Pedro Delgado', 32, 1),
(3, 'Abraham Olano', 28, 1),
(4, 'Gianni Bugno', 27, 2),
(5, 'Mario Cipollini', 25, 2),
(6, 'Laurent Jalabert', 27, 2),
(7, 'Sean Kelly', 29, 3),
(8, 'Erik Breukink', 31, 3),
(9, 'Johan Museeuw', 26, 3);

-- --------------------------------------------------------

--
-- Table structure for table `EQUIPO`
--

CREATE TABLE `EQUIPO` (
  `EQUIPO` int(11) NOT NULL,
  `NOMBRE` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `EQUIPO`
--

INSERT INTO `EQUIPO` (`EQUIPO`, `NOMBRE`) VALUES
(1, 'Banesto'),
(2, 'Amore Vita'),
(3, 'TVM');

-- --------------------------------------------------------

--
-- Table structure for table `ETAPA`
--

CREATE TABLE `ETAPA` (
  `IDETAPA` int(11) NOT NULL,
  `KM` int(11) NOT NULL,
  `SALIDA` varchar(45) NOT NULL,
  `LLEGADA` varchar(45) NOT NULL,
  `CICLISTA_DORSAL` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ETAPA`
--

INSERT INTO `ETAPA` (`IDETAPA`, `KM`, `SALIDA`, `LLEGADA`, `CICLISTA_DORSAL`) VALUES
(1, 200, 'Madrid', 'Barcelona', 1),
(2, 180, 'Barcelona', 'Valencia', 2),
(3, 220, 'Valencia', 'Sevilla', 3),
(4, 190, 'Sevilla', 'Zaragoza', 4),
(5, 210, 'Zaragoza', 'Valladolid', 5),
(6, 195, 'Valladolid', 'Zamora', 6),
(7, 205, 'Zamora', 'Madrid', 7),
(8, 175, 'Madrid', 'Bilbao', 8),
(9, 185, 'Bilbao', 'Santander', 9);

-- --------------------------------------------------------

--
-- Table structure for table `LLEVAR`
--

CREATE TABLE `LLEVAR` (
  `CICLISTA_DORSAL` int(11) NOT NULL,
  `ETAPA_IDETAPA` int(11) NOT NULL,
  `MAILLOT_CODIGO` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `LLEVAR`
--

INSERT INTO `LLEVAR` (`CICLISTA_DORSAL`, `ETAPA_IDETAPA`, `MAILLOT_CODIGO`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 1),
(6, 6, 2),
(7, 7, 3),
(8, 8, 4),
(9, 9, 1);

-- --------------------------------------------------------

--
-- Table structure for table `MAILLOT`
--

CREATE TABLE `MAILLOT` (
  `CODIGO` int(11) NOT NULL,
  `TIPO` varchar(45) NOT NULL,
  `COLOR` varchar(45) NOT NULL,
  `PREMIO` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `MAILLOT`
--

INSERT INTO `MAILLOT` (`CODIGO`, `TIPO`, `COLOR`, `PREMIO`) VALUES
(1, 'Amarillo', 'Amarillo', 500),
(2, 'Rojo', 'Rojo', 300),
(3, 'Verde', 'Verde', 200),
(4, 'Blanco', 'Blanco', 100);

-- --------------------------------------------------------

--
-- Table structure for table `PUERTO`
--

CREATE TABLE `PUERTO` (
  `ID` int(11) NOT NULL,
  `ALTURA` int(11) NOT NULL,
  `CATEGORIA` varchar(45) NOT NULL,
  `PENDIENTE` int(11) NOT NULL,
  `CICLISTA_DORSAL` int(11) NOT NULL,
  `ETAPA_IDETAPA` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `PUERTO`
--

INSERT INTO `PUERTO` (`ID`, `ALTURA`, `CATEGORIA`, `PENDIENTE`, `CICLISTA_DORSAL`, `ETAPA_IDETAPA`) VALUES
(1, 2000, 'E', 10, 1, 1),
(2, 1800, 'E', 12, 2, 2),
(3, 2200, 'E', 8, 3, 3),
(4, 1900, 'E', 9, 4, 4),
(5, 2100, 'E', 11, 5, 5),
(6, 1950, 'E', 10, 6, 6),
(7, 2050, 'E', 13, 7, 7),
(8, 1750, 'E', 12, 8, 8),
(9, 1850, 'E', 11, 9, 9);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `CICLISTA`
--
ALTER TABLE `CICLISTA`
  ADD PRIMARY KEY (`DORSAL`,`EQUIPO_EQUIPO`),
  ADD UNIQUE KEY `DORSAL_UNIQUE` (`DORSAL`),
  ADD KEY `fk_CICLISTA_EQUIPO_idx` (`EQUIPO_EQUIPO`);

--
-- Indexes for table `EQUIPO`
--
ALTER TABLE `EQUIPO`
  ADD PRIMARY KEY (`EQUIPO`),
  ADD UNIQUE KEY `NOMEQ_UNIQUE` (`EQUIPO`);

--
-- Indexes for table `ETAPA`
--
ALTER TABLE `ETAPA`
  ADD PRIMARY KEY (`IDETAPA`,`CICLISTA_DORSAL`),
  ADD KEY `fk_ETAPA_CICLISTA1_idx` (`CICLISTA_DORSAL`);

--
-- Indexes for table `LLEVAR`
--
ALTER TABLE `LLEVAR`
  ADD PRIMARY KEY (`CICLISTA_DORSAL`,`ETAPA_IDETAPA`,`MAILLOT_CODIGO`),
  ADD KEY `fk_LLEVAR_ETAPA1_idx` (`ETAPA_IDETAPA`),
  ADD KEY `fk_LLEVAR_MAILLOT1_idx` (`MAILLOT_CODIGO`);

--
-- Indexes for table `MAILLOT`
--
ALTER TABLE `MAILLOT`
  ADD PRIMARY KEY (`CODIGO`);

--
-- Indexes for table `PUERTO`
--
ALTER TABLE `PUERTO`
  ADD PRIMARY KEY (`ID`,`ALTURA`,`CICLISTA_DORSAL`,`ETAPA_IDETAPA`),
  ADD KEY `fk_PUERTO_CICLISTA1_idx` (`CICLISTA_DORSAL`),
  ADD KEY `fk_PUERTO_ETAPA1_idx` (`ETAPA_IDETAPA`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `CICLISTA`
--
ALTER TABLE `CICLISTA`
  ADD CONSTRAINT `fk_CICLISTA_EQUIPO` FOREIGN KEY (`EQUIPO_EQUIPO`) REFERENCES `EQUIPO` (`EQUIPO`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `ETAPA`
--
ALTER TABLE `ETAPA`
  ADD CONSTRAINT `fk_ETAPA_CICLISTA1` FOREIGN KEY (`CICLISTA_DORSAL`) REFERENCES `CICLISTA` (`DORSAL`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `LLEVAR`
--
ALTER TABLE `LLEVAR`
  ADD CONSTRAINT `fk_LLEVAR_CICLISTA1` FOREIGN KEY (`CICLISTA_DORSAL`) REFERENCES `CICLISTA` (`DORSAL`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_LLEVAR_ETAPA1` FOREIGN KEY (`ETAPA_IDETAPA`) REFERENCES `ETAPA` (`IDETAPA`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_LLEVAR_MAILLOT1` FOREIGN KEY (`MAILLOT_CODIGO`) REFERENCES `MAILLOT` (`CODIGO`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `PUERTO`
--
ALTER TABLE `PUERTO`
  ADD CONSTRAINT `fk_PUERTO_CICLISTA1` FOREIGN KEY (`CICLISTA_DORSAL`) REFERENCES `CICLISTA` (`DORSAL`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_PUERTO_ETAPA1` FOREIGN KEY (`ETAPA_IDETAPA`) REFERENCES `ETAPA` (`IDETAPA`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
