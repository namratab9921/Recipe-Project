-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2024 at 11:43 AM
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
-- Database: `cook_receipe_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`) VALUES
(1, 'Aniket', 'apgmail.com', '8338003'),
(2, 'tejas', 'apgmail.com', '8338003'),
(3, 'tejas', 'apgmail.com', '8338003'),
(4, 'tejas', 'apgmail.com', '8338003'),
(5, 'Ap', 'apgmail.com', '8338003'),
(6, 'kaka', 'apa', 'akakla');

-- --------------------------------------------------------

--
-- Table structure for table `ingredients`
--

CREATE TABLE `ingredients` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `unitId` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ingredients`
--

INSERT INTO `ingredients` (`id`, `name`, `unitId`, `price`) VALUES
(8, 'salt', 29, 15),
(9, 'water', 42, 15),
(11, 'lemon', 50, 5),
(22, 'Pohe', 29, 30),
(23, 'Pickle', 29, 100),
(25, 'Jeera', 20, 10),
(26, 'Coriander Powder', 20, 10),
(27, 'Kasuri Methi', 20, 10),
(28, 'Coriander Powder', 20, 0),
(29, 'Coriander Powder', 29, 0),
(30, 'Coriander Powder', 50, 1);

-- --------------------------------------------------------

--
-- Table structure for table `orderreceipeingredients`
--

CREATE TABLE `orderreceipeingredients` (
  `id` int(11) NOT NULL,
  `orderReceipeId` int(11) NOT NULL,
  `ingredientId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `rate` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orderreceipeingredients`
--

INSERT INTO `orderreceipeingredients` (`id`, `orderReceipeId`, `ingredientId`, `quantity`, `rate`, `amount`) VALUES
(1, 0, 0, 44, 0, 0),
(2, 0, 0, 4, 0, 0),
(3, 0, 0, 4, 0, 0),
(4, 0, 0, 4, 0, 0),
(5, 31, 34, 4, 0, 33),
(6, 31, 34, 4, 4, 33);

-- --------------------------------------------------------

--
-- Table structure for table `orderreceipes`
--

CREATE TABLE `orderreceipes` (
  `id` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `receipeId` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `billAmount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orderreceipes`
--

INSERT INTO `orderreceipes` (`id`, `orderId`, `receipeId`, `amount`, `billAmount`) VALUES
(1, 3, 5, 4, 4);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `mobileNo` int(11) NOT NULL,
  `ODate` date NOT NULL,
  `EDate` date NOT NULL,
  `ETime` varchar(100) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `name`, `mobileNo`, `ODate`, `EDate`, `ETime`, `quantity`) VALUES
(1, 'Aniket patil', 11, '0000-00-00', '0000-00-00', '2888', 288),
(2, 'Aniket patil', 11, '2000-12-11', '2000-12-18', '2888', 288);

-- --------------------------------------------------------

--
-- Table structure for table `receipeingredients`
--

CREATE TABLE `receipeingredients` (
  `id` int(11) NOT NULL,
  `receipeId` int(11) NOT NULL,
  `ingredientId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `receipeingredients`
--

INSERT INTO `receipeingredients` (`id`, `receipeId`, `ingredientId`, `quantity`) VALUES
(6, 6, 25, 44),
(7, 6, 26, 20),
(8, 6, 23, 20),
(9, 0, 27, 30),
(10, 0, 11, 333),
(11, 6, 25, 232),
(12, 6, 27, 44),
(13, 6, 27, 666),
(14, 6, 27, 23232),
(25, 7, 11, 88),
(26, 7, 27, 10),
(27, 7, 26, 10),
(28, 3, 8, 10),
(29, 3, 25, 50),
(30, 9, 8, 15),
(31, 9, 25, 10),
(32, 9, 11, 1),
(33, 10, 8, 10),
(34, 10, 9, 1),
(35, 10, 27, 1),
(36, 10, 26, 20),
(37, 6, 22, 0),
(38, 14, 8, 10),
(39, 14, 30, 10),
(40, 14, 8, 0),
(41, 14, 22, 70),
(42, 3, 8, 10);

-- --------------------------------------------------------

--
-- Table structure for table `receipes`
--

CREATE TABLE `receipes` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `quantity` int(11) NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `receipes`
--

INSERT INTO `receipes` (`id`, `name`, `quantity`, `description`) VALUES
(3, 'Jeera Rice', 10, 'Fragrant basmati rice is scented with cumin seeds'),
(9, 'Paav Bhaji', 10, ''),
(11, 'paneer', 10, ''),
(12, 'kaju', 10, 'aaaa'),
(14, 'kaju', 10, 'sadsad'),
(15, 'kaju', 10, 'asdsadsad'),
(16, 'kaju', 10, 'aaaa'),
(18, 'Paav Bhaji', 10, '');

-- --------------------------------------------------------

--
-- Table structure for table `units`
--

CREATE TABLE `units` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `units`
--

INSERT INTO `units` (`id`, `name`) VALUES
(20, 'gram'),
(29, 'kg'),
(39, 'tola'),
(42, 'liter'),
(50, 'nos.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orderreceipeingredients`
--
ALTER TABLE `orderreceipeingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orderreceipes`
--
ALTER TABLE `orderreceipes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `receipeingredients`
--
ALTER TABLE `receipeingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `receipes`
--
ALTER TABLE `receipes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `orderreceipeingredients`
--
ALTER TABLE `orderreceipeingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `orderreceipes`
--
ALTER TABLE `orderreceipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `receipeingredients`
--
ALTER TABLE `receipeingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `receipes`
--
ALTER TABLE `receipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `units`
--
ALTER TABLE `units`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
