-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 01-Out-2018 às 14:09
-- Versão do servidor: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `musicin`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `curtiu`
--

DROP TABLE IF EXISTS `curtiu`;
CREATE TABLE IF NOT EXISTS `curtiu` (
  `Cod_Usuario` int(11) NOT NULL,
  `Cod_Post` int(11) NOT NULL,
  PRIMARY KEY (`Cod_Usuario`,`Cod_Post`),
  KEY `Cod_Post` (`Cod_Post`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `genero`
--

DROP TABLE IF EXISTS `genero`;
CREATE TABLE IF NOT EXISTS `genero` (
  `Cod_Genero` int(11) NOT NULL AUTO_INCREMENT,
  `Nome_Genero` varchar(50) NOT NULL,
  PRIMARY KEY (`Cod_Genero`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `post`
--

DROP TABLE IF EXISTS `post`;
CREATE TABLE IF NOT EXISTS `post` (
  `Cod_Post` int(11) NOT NULL AUTO_INCREMENT,
  `Cod_Genero` int(11) NOT NULL,
  `Cod_Usuario` int(11) NOT NULL,
  `Nome_Musica` varchar(50) NOT NULL,
  `Comentario` varchar(1000) DEFAULT NULL,
  `Data_Post` date NOT NULL,
  `Autor` varchar(50) NOT NULL,
  PRIMARY KEY (`Cod_Post`),
  KEY `Cod_Usuario` (`Cod_Usuario`),
  KEY `Cod_Genero` (`Cod_Genero`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `Cod_Usuario` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(50) NOT NULL,
  `Senha` varchar(30) NOT NULL,
  `Nome_Usuario` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Cod_Usuario`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
