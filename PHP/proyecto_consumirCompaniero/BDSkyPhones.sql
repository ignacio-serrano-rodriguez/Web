-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 16, 2024 at 11:35 AM
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
-- Database: `proyecto_php`
--

-- --------------------------------------------------------

--
-- Table structure for table `carrito`
--

CREATE TABLE `carrito` (
  `id_carrito` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `compras_usuario_producto`
--

CREATE TABLE `compras_usuario_producto` (
  `id_compra` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `compras_usuario_producto`
--

INSERT INTO `compras_usuario_producto` (`id_compra`, `usuario_id`, `producto_id`, `cantidad`) VALUES
(1, 2, 5, 1),
(2, 2, 5, 1),
(3, 2, 6, 1),
(4, 2, 5, 1),
(5, 2, 5, 1),
(6, 2, 5, 1),
(7, 2, 6, 1),
(8, 2, 5, 1),
(9, 2, 5, 1),
(10, 2, 5, 1),
(14, 2, 8, 1),
(15, 2, 9, 2);

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `precio` double NOT NULL,
  `cantidad` int(11) NOT NULL,
  `tipo` varchar(15) DEFAULT NULL,
  `ventas` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre`, `precio`, `cantidad`, `tipo`, `ventas`) VALUES
(5, 'iPhone 13 Pro', 999, 10, 'm', 0),
(6, 'Samsung Galaxy Tab S7', 649.99, 10, 't', 0),
(7, 'Anker PowerCore 10000', 29.99, 10, 'a', 0),
(8, 'Google Pixel 6', 699, 10, 'm', 0),
(9, 'iPad Air', 599, 10, 't', 0),
(10, 'USB-C to Lightning Cable', 12.99, 10, 'a', 0),
(11, 'OnePlus 9 Pro', 899, 10, 'm', 0),
(12, 'Microsoft Surface Pro 8', 1099.99, 10, 't', 0),
(13, 'Wireless Charging Pad', 19.99, 10, 'a', 0),
(14, 'Xiaomi Mi 11', 699, 10, 'm', 0),
(15, 'Amazon Fire HD 10', 149.99, 10, 't', 0),
(16, 'Micro USB Cable', 7.99, 10, 'a', 0),
(17, 'Huawei P40 Pro', 899, 10, 'm', 0),
(18, 'Lenovo Tab M10 Plus', 229, 10, 't', 0),
(19, 'Portable External Battery', 39.99, 10, 'a', 0),
(20, 'Sony Xperia 1 III', 1299, 10, 'm', 0),
(21, 'Samsung Galaxy Tab A7', 229.99, 10, 't', 0),
(22, 'USB Type-C to HDMI Adapter', 17.99, 10, 'a', 0),
(23, 'Motorola Edge 20', 499, 10, 'm', 0),
(24, 'Apple iPad Mini', 499, 10, 't', 0);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `rol` int(11) NOT NULL DEFAULT 0,
  `nombre` varchar(20) NOT NULL,
  `apellidos` varchar(30) DEFAULT NULL,
  `contrasena` varchar(20) NOT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `correo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `rol`, `nombre`, `apellidos`, `contrasena`, `direccion`, `correo`) VALUES
(1, 1, 'admin', NULL, 'admin', NULL, 'admin@noskyphones.com'),
(2, 0, 'usuario', NULL, 'usuario', NULL, 'usuario@noskyphones.com'),
(13, 1, 'joseca', 'perez', 'joseca', NULL, 'joseca@noskyphones.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id_carrito`),
  ADD KEY `usuario_id` (`usuario_id`,`producto_id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indexes for table `compras_usuario_producto`
--
ALTER TABLE `compras_usuario_producto`
  ADD PRIMARY KEY (`id_compra`),
  ADD KEY `usuario_id` (`usuario_id`,`producto_id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id_carrito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `compras_usuario_producto`
--
ALTER TABLE `compras_usuario_producto`
  MODIFY `id_compra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `carrito_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id_producto`);

--
-- Constraints for table `compras_usuario_producto`
--
ALTER TABLE `compras_usuario_producto`
  ADD CONSTRAINT `compras_usuario_producto_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `compras_usuario_producto_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id_producto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;