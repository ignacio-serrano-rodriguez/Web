-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 12, 2024 at 01:19 PM
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
-- Database: `relacion3`
--

-- --------------------------------------------------------

--
-- Table structure for table `cliente`
--

CREATE TABLE `cliente` (
  `dni` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cliente`
--

INSERT INTO `cliente` (`dni`, `nombre`, `edad`) VALUES
(300, 'Cliente1', 30),
(301, 'Cliente2', 31),
(302, 'Cliente3', 32),
(303, 'Cliente4', 33),
(304, 'Cliente5', 34),
(305, 'Cliente6', 35),
(306, 'Cliente7', 36),
(307, 'Cliente8', 37),
(308, 'Cliente9', 38),
(309, 'Cliente10', 39);

-- --------------------------------------------------------

--
-- Table structure for table `comercio`
--

CREATE TABLE `comercio` (
  `CIF` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `ciudad` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comercio`
--

INSERT INTO `comercio` (`CIF`, `nombre`, `ciudad`) VALUES
(200, 'Comercio1', 'Sevilla'),
(201, 'Comercio2', 'Sevilla'),
(202, 'Comercio3', 'Sevilla'),
(203, 'Comercio4', 'Sevilla'),
(204, 'Comercio5', 'Sevilla'),
(205, 'Comercio6', 'Sevilla'),
(206, 'Comercio7', 'Sevilla'),
(207, 'Comercio8', 'Sevilla'),
(208, 'Comercio9', 'Sevilla'),
(209, 'Comercio10', 'Sevilla');

-- --------------------------------------------------------

--
-- Table structure for table `distribuye`
--

CREATE TABLE `distribuye` (
  `df` int(11) NOT NULL,
  `código` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `CIF` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `distribuye`
--

INSERT INTO `distribuye` (`df`, `código`, `cantidad`, `CIF`) VALUES
(400, 100, 50, 200),
(401, 101, 51, 201),
(402, 102, 52, 202),
(403, 103, 53, 203),
(404, 104, 54, 204),
(405, 105, 55, 205),
(406, 106, 56, 206),
(407, 107, 57, 207),
(408, 108, 58, 208),
(409, 109, 59, 209);

-- --------------------------------------------------------

--
-- Table structure for table `fabricante`
--

CREATE TABLE `fabricante` (
  `id_fab` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `país` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fabricante`
--

INSERT INTO `fabricante` (`id_fab`, `nombre`, `país`) VALUES
(1, 'Fabricante1', 'España'),
(2, 'Fabricante2', 'España'),
(3, 'Fabricante3', 'España'),
(4, 'Fabricante4', 'España'),
(5, 'Fabricante5', 'España'),
(6, 'Fabricante6', 'España'),
(7, 'Fabricante7', 'España'),
(8, 'Fabricante8', 'España'),
(9, 'Fabricante9', 'España'),
(10, 'Fabricante10', 'España');

-- --------------------------------------------------------

--
-- Table structure for table `programa`
--

CREATE TABLE `programa` (
  `código` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `versión` varchar(255) DEFAULT NULL,
  `id_fab` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `programa`
--

INSERT INTO `programa` (`código`, `nombre`, `versión`, `id_fab`) VALUES
(100, 'Programa1', '1.0', 1),
(101, 'Programa2', '1.0', 2),
(102, 'Programa3', '1.0', 3),
(103, 'Programa4', '1.0', 4),
(104, 'Programa5', '1.0', 5),
(105, 'Programa6', '1.0', 6),
(106, 'Programa7', '1.0', 7),
(107, 'Programa8', '1.0', 8),
(108, 'Programa9', '1.0', 9),
(109, 'Programa10', '1.0', 10);

-- --------------------------------------------------------

--
-- Table structure for table `registra`
--

CREATE TABLE `registra` (
  `df` int(11) NOT NULL,
  `dni` int(11) DEFAULT NULL,
  `código` int(11) DEFAULT NULL,
  `medio` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `registra`
--

INSERT INTO `registra` (`df`, `dni`, `código`, `medio`) VALUES
(500, 300, 100, 'Online'),
(501, 301, 101, 'Online'),
(502, 302, 102, 'Online'),
(503, 303, 103, 'Online'),
(504, 304, 104, 'Online'),
(505, 305, 105, 'Online'),
(506, 306, 106, 'Online'),
(507, 307, 107, 'Online'),
(508, 308, 108, 'Online'),
(509, 309, 109, 'Online');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`dni`);

--
-- Indexes for table `comercio`
--
ALTER TABLE `comercio`
  ADD PRIMARY KEY (`CIF`);

--
-- Indexes for table `distribuye`
--
ALTER TABLE `distribuye`
  ADD PRIMARY KEY (`df`),
  ADD KEY `código` (`código`),
  ADD KEY `CIF` (`CIF`);

--
-- Indexes for table `fabricante`
--
ALTER TABLE `fabricante`
  ADD PRIMARY KEY (`id_fab`);

--
-- Indexes for table `programa`
--
ALTER TABLE `programa`
  ADD PRIMARY KEY (`código`),
  ADD KEY `id_fab` (`id_fab`);

--
-- Indexes for table `registra`
--
ALTER TABLE `registra`
  ADD PRIMARY KEY (`df`),
  ADD KEY `dni` (`dni`),
  ADD KEY `código` (`código`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `distribuye`
--
ALTER TABLE `distribuye`
  ADD CONSTRAINT `distribuye_ibfk_1` FOREIGN KEY (`código`) REFERENCES `programa` (`código`),
  ADD CONSTRAINT `distribuye_ibfk_2` FOREIGN KEY (`CIF`) REFERENCES `comercio` (`CIF`);

--
-- Constraints for table `programa`
--
ALTER TABLE `programa`
  ADD CONSTRAINT `programa_ibfk_1` FOREIGN KEY (`id_fab`) REFERENCES `fabricante` (`id_fab`);

--
-- Constraints for table `registra`
--
ALTER TABLE `registra`
  ADD CONSTRAINT `registra_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `cliente` (`dni`),
  ADD CONSTRAINT `registra_ibfk_2` FOREIGN KEY (`código`) REFERENCES `programa` (`código`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
