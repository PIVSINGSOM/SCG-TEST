-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: mysql:3306
-- Generation Time: Aug 16, 2021 at 06:12 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scg_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `machine`
--

CREATE TABLE `machine` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(200) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `machine`
--

INSERT INTO `machine` (`id`, `username`, `password`, `email`, `address`, `created_at`, `updated_at`) VALUES
(1, 'test1', '$2b$10$JxBfHsIjYq2EWYKvs9Qb0.DEXp8z8Ldn94LIvAmfK46IbsaFAomf6', 'test1@gamil.com', '11 m.2 dd AAA 009900', '2021-08-15 01:14:42', '2021-08-15 01:14:42'),
(2, 'admin', '$2b$10$hu.2wnGzDZiryZRLH6m4y.fPGxa56L91sxS0gwOECuUWBb2aTrFH2', 'admin@gamil.com', '11 m.2 dd AAA 009900', '2021-08-16 00:23:48', '2021-08-16 00:23:48'),
(3, 'test2', '$2b$10$Ijsf0cdKQ1mVrmphapz/wut3EsQ2JW/mR/v1dkqp83jXnUfLQ96yK', 'test2@gmail.com', '3323 asdas d234 ', '2021-08-16 03:15:59', '2021-08-16 03:15:59');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `payment_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `payment_id`, `product_id`, `quantity`, `amount`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 18, '2021-08-15 03:02:11', '2021-08-15 03:02:11'),
(2, 17, 1, 2, 36, '2021-08-15 03:32:34', '2021-08-15 03:32:34'),
(3, 18, 1, 2, 36, '2021-08-15 03:33:08', '2021-08-15 03:33:08'),
(4, 19, 2, 9, 162, '2021-08-15 03:34:14', '2021-08-15 03:34:14'),
(5, 20, 4, 1, 24, '2021-08-15 22:17:46', '2021-08-15 22:17:46'),
(6, 20, 3, 1, 24, '2021-08-15 22:17:46', '2021-08-15 22:17:46'),
(7, 20, 6, 2, 54, '2021-08-15 22:17:46', '2021-08-15 22:17:46'),
(8, 21, 5, 1, 14, '2021-08-15 22:21:18', '2021-08-15 22:21:18'),
(9, 22, 1, 1, 18, '2021-08-15 22:23:16', '2021-08-15 22:23:16'),
(10, 23, 1, 1, 18, '2021-08-15 22:23:38', '2021-08-15 22:23:38'),
(11, 24, 1, 1, 18, '2021-08-15 22:23:56', '2021-08-15 22:23:56'),
(12, 25, 1, 1, 18, '2021-08-15 22:24:34', '2021-08-15 22:24:34'),
(13, 26, 1, 1, 18, '2021-08-15 22:24:53', '2021-08-15 22:24:53'),
(14, 27, 1, 1, 18, '2021-08-15 22:25:22', '2021-08-15 22:25:22'),
(15, 28, 6, 1, 27, '2021-08-15 22:25:44', '2021-08-15 22:25:44'),
(16, 29, 4, 1, 24, '2021-08-15 22:27:01', '2021-08-15 22:27:01'),
(17, 30, 4, 1, 24, '2021-08-15 22:27:28', '2021-08-15 22:27:28'),
(18, 31, 2, 1, 18, '2021-08-15 22:36:52', '2021-08-15 22:36:52'),
(19, 32, 4, 3, 72, '2021-08-16 02:54:31', '2021-08-16 02:54:31'),
(20, 33, 4, 3, 72, '2021-08-16 03:27:11', '2021-08-16 03:27:11'),
(21, 47, 6, 1, 27, '2021-08-16 12:37:51', '2021-08-16 12:37:51'),
(22, 48, 5, 1, 14, '2021-08-16 12:39:01', '2021-08-16 12:39:01'),
(23, 49, 5, 1, 14, '2021-08-16 12:40:44', '2021-08-16 12:40:44'),
(24, 50, 1, 1, 18, '2021-08-16 12:43:23', '2021-08-16 12:43:23'),
(25, 51, 1, 1, 18, '2021-08-16 12:45:10', '2021-08-16 12:45:10'),
(26, 52, 1, 1, 18, '2021-08-16 12:47:59', '2021-08-16 12:47:59'),
(27, 53, 2, 1, 18, '2021-08-16 12:51:31', '2021-08-16 12:51:31'),
(28, 54, 5, 1, 14, '2021-08-16 12:51:54', '2021-08-16 12:51:54'),
(29, 55, 5, 1, 14, '2021-08-16 12:53:37', '2021-08-16 12:53:37'),
(30, 56, 5, 1, 14, '2021-08-16 12:54:44', '2021-08-16 12:54:44'),
(31, 57, 6, 1, 27, '2021-08-16 12:56:03', '2021-08-16 12:56:03'),
(32, 58, 3, 1, 24, '2021-08-16 12:59:16', '2021-08-16 12:59:16'),
(33, 59, 1, 1, 18, '2021-08-16 12:59:39', '2021-08-16 12:59:39'),
(34, 60, 5, 1, 14, '2021-08-16 12:59:58', '2021-08-16 12:59:58'),
(35, 61, 1, 1, 18, '2021-08-16 13:00:34', '2021-08-16 13:00:34'),
(36, 62, 3, 1, 24, '2021-08-16 13:01:10', '2021-08-16 13:01:10'),
(37, 63, 6, 1, 27, '2021-08-16 13:01:25', '2021-08-16 13:01:25'),
(38, 64, 6, 1, 27, '2021-08-16 13:02:00', '2021-08-16 13:02:00'),
(39, 65, 2, 1, 18, '2021-08-16 13:02:54', '2021-08-16 13:02:54'),
(40, 66, 3, 1, 24, '2021-08-16 13:03:45', '2021-08-16 13:03:45'),
(41, 67, 1, 1, 18, '2021-08-16 13:05:18', '2021-08-16 13:05:18'),
(42, 68, 5, 1, 14, '2021-08-16 13:07:10', '2021-08-16 13:07:10'),
(43, 69, 1, 1, 18, '2021-08-16 13:09:32', '2021-08-16 13:09:32');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `id` int(11) NOT NULL,
  `machine_id` int(11) NOT NULL,
  `amount` varchar(20) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`id`, `machine_id`, `amount`, `created_at`, `updated_at`) VALUES
(1, 1, '18', '2021-08-15 03:02:11', '2021-08-15 03:02:11'),
(2, 1, '36', '2021-08-15 03:06:59', '2021-08-15 03:06:59'),
(3, 1, '36', '2021-08-15 03:12:16', '2021-08-15 03:12:16'),
(4, 1, '36', '2021-08-15 03:13:40', '2021-08-15 03:13:40'),
(5, 1, '36', '2021-08-15 03:14:31', '2021-08-15 03:14:31'),
(6, 1, '36', '2021-08-15 03:20:46', '2021-08-15 03:20:46'),
(7, 1, '36', '2021-08-15 03:21:16', '2021-08-15 03:21:16'),
(8, 1, '36', '2021-08-15 03:24:47', '2021-08-15 03:24:47'),
(9, 1, '36', '2021-08-15 03:25:31', '2021-08-15 03:25:31'),
(10, 1, '36', '2021-08-15 03:26:19', '2021-08-15 03:26:19'),
(11, 1, '36', '2021-08-15 03:26:54', '2021-08-15 03:26:54'),
(12, 1, '36', '2021-08-15 03:28:22', '2021-08-15 03:28:22'),
(13, 1, '36', '2021-08-15 03:29:12', '2021-08-15 03:29:12'),
(14, 1, '36', '2021-08-15 03:30:36', '2021-08-15 03:30:36'),
(15, 1, '36', '2021-08-15 03:31:09', '2021-08-15 03:31:09'),
(16, 1, '36', '2021-08-15 03:32:00', '2021-08-15 03:32:00'),
(17, 1, '36', '2021-08-15 03:32:34', '2021-08-15 03:32:34'),
(18, 1, '36', '2021-08-15 03:33:08', '2021-08-15 03:33:08'),
(19, 1, '162', '2021-08-15 03:34:14', '2021-08-15 03:34:14'),
(20, 1, '102', '2021-08-15 22:17:46', '2021-08-15 22:17:46'),
(21, 1, '14.5', '2021-08-15 22:21:18', '2021-08-15 22:21:18'),
(22, 1, '18', '2021-08-15 22:23:16', '2021-08-15 22:23:16'),
(23, 1, '18', '2021-08-15 22:23:38', '2021-08-15 22:23:38'),
(24, 1, '18', '2021-08-15 22:23:56', '2021-08-15 22:23:56'),
(25, 1, '18', '2021-08-15 22:24:34', '2021-08-15 22:24:34'),
(26, 1, '18', '2021-08-15 22:24:53', '2021-08-15 22:24:53'),
(27, 1, '18', '2021-08-15 22:25:22', '2021-08-15 22:25:22'),
(28, 1, '27', '2021-08-15 22:25:44', '2021-08-15 22:25:44'),
(29, 1, '24', '2021-08-15 22:27:01', '2021-08-15 22:27:01'),
(30, 1, '24', '2021-08-15 22:27:27', '2021-08-15 22:27:27'),
(31, 1, '18', '2021-08-15 22:36:52', '2021-08-15 22:36:52'),
(32, 2, '72', '2021-08-16 02:54:31', '2021-08-16 02:54:31'),
(33, 2, '72', '2021-08-16 03:27:11', '2021-08-16 03:27:11'),
(34, 1, '24', '2021-08-16 12:20:21', '2021-08-16 12:20:21'),
(35, 1, '24', '2021-08-16 12:24:52', '2021-08-16 12:24:52'),
(36, 1, '48', '2021-08-16 12:25:28', '2021-08-16 12:25:28'),
(37, 1, '90', '2021-08-16 12:25:56', '2021-08-16 12:25:56'),
(38, 1, '18', '2021-08-16 12:26:31', '2021-08-16 12:26:31'),
(39, 1, '24', '2021-08-16 12:29:30', '2021-08-16 12:29:30'),
(40, 1, '24', '2021-08-16 12:30:07', '2021-08-16 12:30:07'),
(41, 1, '27', '2021-08-16 12:31:06', '2021-08-16 12:31:06'),
(42, 1, '24', '2021-08-16 12:31:36', '2021-08-16 12:31:36'),
(43, 1, '18', '2021-08-16 12:33:47', '2021-08-16 12:33:47'),
(44, 1, '18', '2021-08-16 12:34:16', '2021-08-16 12:34:16'),
(45, 1, '72', '2021-08-16 12:36:35', '2021-08-16 12:36:35'),
(46, 1, '18', '2021-08-16 12:37:14', '2021-08-16 12:37:14'),
(47, 1, '27', '2021-08-16 12:37:51', '2021-08-16 12:37:51'),
(48, 1, '14.5', '2021-08-16 12:39:01', '2021-08-16 12:39:01'),
(49, 1, '14.5', '2021-08-16 12:40:44', '2021-08-16 12:40:44'),
(50, 1, '18', '2021-08-16 12:43:23', '2021-08-16 12:43:23'),
(51, 1, '18', '2021-08-16 12:45:10', '2021-08-16 12:45:10'),
(52, 1, '18', '2021-08-16 12:47:59', '2021-08-16 12:47:59'),
(53, 1, '18', '2021-08-16 12:51:31', '2021-08-16 12:51:31'),
(54, 1, '14.5', '2021-08-16 12:51:54', '2021-08-16 12:51:54'),
(55, 1, '14.5', '2021-08-16 12:53:37', '2021-08-16 12:53:37'),
(56, 1, '14.5', '2021-08-16 12:54:43', '2021-08-16 12:54:43'),
(57, 1, '27', '2021-08-16 12:56:03', '2021-08-16 12:56:03'),
(58, 1, '24', '2021-08-16 12:59:16', '2021-08-16 12:59:16'),
(59, 1, '18', '2021-08-16 12:59:39', '2021-08-16 12:59:39'),
(60, 1, '14.5', '2021-08-16 12:59:58', '2021-08-16 12:59:58'),
(61, 1, '18', '2021-08-16 13:00:34', '2021-08-16 13:00:34'),
(62, 1, '24', '2021-08-16 13:01:10', '2021-08-16 13:01:10'),
(63, 1, '27', '2021-08-16 13:01:25', '2021-08-16 13:01:25'),
(64, 1, '27', '2021-08-16 13:02:00', '2021-08-16 13:02:00'),
(65, 1, '18', '2021-08-16 13:02:54', '2021-08-16 13:02:54'),
(66, 1, '24', '2021-08-16 13:03:45', '2021-08-16 13:03:45'),
(67, 1, '18', '2021-08-16 13:05:18', '2021-08-16 13:05:18'),
(68, 1, '14.5', '2021-08-16 13:07:10', '2021-08-16 13:07:10'),
(69, 1, '18', '2021-08-16 13:09:32', '2021-08-16 13:09:32');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `price` varchar(10) NOT NULL,
  `classifier` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `image`, `price`, `classifier`, `created_at`, `updated_at`) VALUES
(1, 'cola', 'https://sc04.alicdn.com/kf/UTB8SGQYC9nEXKJk43Ubq6zLppXac.jpg', '18', 'กระป๋อง', '2021-08-15 00:46:22', '2021-08-15 00:46:22'),
(2, 'cola zero', 'https://sc04.alicdn.com/kf/UTB8SGQYC9nEXKJk43Ubq6zLppXac.jpg', '18', 'กระป๋อง', '2021-08-15 01:35:46', '2021-08-14 19:41:52'),
(3, 'แฟนต้า น้ำเขียว 1.5 ล.', 'https://static.bigc.co.th/media/catalog/product/8/8/8855199143180_2.jpg', '24.00', 'ขวด', '2021-08-15 17:41:32', '2021-08-15 17:41:32'),
(4, 'แฟนต้า น้ำอัดลม น้ำแดง 1.5 ล.', 'https://static.bigc.co.th/media/catalog/product/8/8/8851959143179_5.jpg', '24.00', 'ขวด', '2021-08-15 17:42:24', '2021-08-15 17:42:24'),
(5, 'โค้ก น้ำอัดลม 325 มล.', 'https://static.bigc.co.th/media/catalog/product/8/8/8855199132016.jpg', '14.50', 'กระป๋อง', '2021-08-15 17:45:51', '2021-08-15 17:45:51'),
(6, 'เอส เพลย์ เครื่องดื่มน้ำอัดลม กลิ่นเกรพเบอร์รี่ 1.6 ล.', 'https://static.bigc.co.th/media/catalog/product/8/8/8851952124144_1.jpg', '27.00', 'ขวด', '2021-08-15 17:46:16', '2021-08-15 17:46:16'),
(7, 'โค้ก น้ำอัดลม สูตรไม่มีน้ำตาล 325 มล.', 'https://static.bigc.co.th/media/catalog/product/8/8/8851959132074_6.jpg', '14.50', 'กระป๋อง', '2021-08-16 03:06:18', '2021-08-16 03:06:18'),
(8, 'เอส เพลย์ น้ำอัดลม กลิ่นส้ม 1 ล.', 'https://static.bigc.co.th/media/catalog/product/8/8/8851952120078_1.jpg', '20.00', 'ขวด', '2021-08-16 03:07:31', '2021-08-16 03:07:31');

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `machine_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `stock`
--

INSERT INTO `stock` (`id`, `machine_id`, `product_id`, `quantity`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, '2021-08-15 02:02:10', '2021-08-16 13:09:32'),
(2, 1, 2, 2, '2021-08-15 02:40:29', '2021-08-16 13:02:54'),
(3, 1, 3, 3, '2021-08-15 17:42:38', '2021-08-16 13:03:45'),
(4, 1, 4, 3, '2021-08-15 17:42:42', '2021-08-16 12:25:28'),
(5, 1, 5, 2, '2021-08-15 17:46:23', '2021-08-16 13:07:10'),
(6, 1, 6, 2, '2021-08-15 17:46:26', '2021-08-16 13:02:00'),
(7, 2, 2, 1, '2021-08-16 02:44:24', '2021-08-16 02:44:24'),
(8, 2, 3, 4, '2021-08-16 02:44:41', '2021-08-16 02:44:41'),
(9, 2, 4, 0, '2021-08-16 02:46:05', '2021-08-16 03:27:11');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `machine`
--
ALTER TABLE `machine`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payment_id` (`payment_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `machine_id` (`machine_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`),
  ADD KEY `machine_id` (`machine_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `machine`
--
ALTER TABLE `machine`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`payment_id`) REFERENCES `payment` (`id`),
  ADD CONSTRAINT `order_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`machine_id`) REFERENCES `machine` (`id`);

--
-- Constraints for table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`machine_id`) REFERENCES `machine` (`id`),
  ADD CONSTRAINT `stock_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
