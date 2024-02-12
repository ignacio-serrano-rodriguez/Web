-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 12, 2024 at 04:56 PM
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
-- Database: `relacion4`
--

-- --------------------------------------------------------

--
-- Table structure for table `depart`
--

CREATE TABLE `depart` (
  `dept_no` varchar(100) NOT NULL,
  `dnombre` varchar(100) DEFAULT NULL,
  `loc` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `depart`
--

INSERT INTO `depart` (`dept_no`, `dnombre`, `loc`) VALUES
('10', 'CONTABILIDAD', 'SEVILLA'),
('20', 'INVESTIGACIÓN', 'MADRID'),
('40', 'PRODUCCIÓN', 'BILBAO');

-- --------------------------------------------------------

--
-- Table structure for table `emple`
--

CREATE TABLE `emple` (
  `emp_no` varchar(100) NOT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `oficio` varchar(100) DEFAULT NULL,
  `dir` varchar(100) DEFAULT NULL,
  `fecha_alt` date DEFAULT NULL,
  `salario` int(11) DEFAULT NULL,
  `comision` int(11) DEFAULT NULL,
  `dept_no` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `emple`
--

INSERT INTO `emple` (`emp_no`, `apellido`, `oficio`, `dir`, `fecha_alt`, `salario`, `comision`, `dept_no`) VALUES
('7369', 'SÁNCHEZ', 'EMPLEADO', '7902', '1980-12-17', 104000, NULL, '20'),
('7499', 'ARROYO', 'VENDEDOR', '7698', '1980-02-20', 208000, 39000, '30'),
('7521', 'SALA', 'VENDEDOR', '7698', '1981-02-22', 162500, 162500, '30'),
('7566', 'JIMÉNEZ', 'DIRECTOR', '7839', '1981-04-02', 386750, NULL, '20'),
('7654', 'MARTÍN', 'VENDEDOR', '7698', '1981-09-29', 162500, 182000, '30'),
('7698', 'NEGRO', 'DIRECTOR', '7839', '1981-05-01', 370500, NULL, '30'),
('7788', 'GIL', 'ANALISTA', '7566', '1981-11-09', 390000, NULL, '20'),
('7839', 'REY', 'PRESIDENTE', NULL, '1981-11-17', 650000, NULL, '10'),
('7844', 'TOVAR', 'VENDEDOR', '7698', '1981-09-08', 195000, 0, '30'),
('7876', 'ALONSO', 'EMPLEADO', '7788', '1981-09-23', 143000, NULL, '20'),
('7900', 'JIMENO', 'EMPLEADO', '7698', '1981-12-03', 1235000, NULL, '30'),
('7902', 'FERNÁNDEZ', 'ANALISTA', '7566', '1981-12-03', 390000, NULL, '20'),
('7934', 'MUÑOZ', 'EMPLEADO', '7782', '1982-01-23', 169000, NULL, '10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `depart`
--
ALTER TABLE `depart`
  ADD PRIMARY KEY (`dept_no`);

--
-- Indexes for table `emple`
--
ALTER TABLE `emple`
  ADD PRIMARY KEY (`emp_no`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
