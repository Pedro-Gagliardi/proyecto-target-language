-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 28-06-2022 a las 01:57:44
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `target_language`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
CREATE TABLE IF NOT EXISTS `alumnos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `edad` int(3) NOT NULL,
  `mail` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`id`, `nombre`, `apellido`, `edad`, `mail`) VALUES
(1, 'Pedro', 'Gagliardi', 30, 'pedroegagliardi@gmail.com'),
(2, 'Juan', 'Perez', 20, 'juanperez@gmail.com'),
(3, 'Manuela', 'Grand', 25, 'manugrand811@gmail.com'),
(4, 'Barbara', 'Grand', 27, 'bg_grand@gmail.com'),
(5, 'Agustín', 'Fernandez', 30, 'agus_fernandez20@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Perú declara de interés nacional la realización del Congreso Internacional de la Lengua Española', 'Hoy 17 de junio se ha publicado el Decreto Supremo del Gobierno del Perú que declara de interés nacional la organización y realización del Congreso Internacional de la Lengua Española (CILE), una noticia que confirma el compromiso definitivo de las autoridades del país para garantizar la viabilidad del congreso.', '', NULL),
(2, 'El director de la RAE y presidente de la ASALE visita las academias de la lengua española de Chile, Perú y Uruguay', 'El viaje institucional, que tiene lugar del 9 al 21 de junio, continúa la ronda oficial de visitas a todas las corporaciones de la ASALE inaugurada en 2020.', '', NULL),
(3, 'Lanzamiento de la Red Panhispánica de Lenguaje Claro', 'Este jueves 9 de junio ha tenido lugar la constitución de la Red Panhispánica de Lenguaje Claro (Red-PHLEC) con un acto celebrado en la Corte Suprema de Justicia de Chile. La presentación ha contado con las palabras de bienvenida del presidente de la Corte Suprema de Chile, Juan Eduardo Fuentes Belmar, y las exposiciones de la ministra presidenta de la Comisión de Lenguaje Claro del Poder Judicial, Ángela Vivanco Martínez, y del director de la RAE, Santiago Muñoz Machado.', '', NULL),
(4, 'Jon Rahm, de aprender inglés con Eminem a líder en EEUU', 'El vasco ha hecho valer su capacidad de superación para adaptarse, triunfar y convertirse en un referente en el PGA Tour', 'Hay una constante en Jon Rahm para cada cosa que hace. Quiere ser el mejor. La misma vena competitiva late jugándose el US Open que compartiendo una partida de mus con los amigos cuando vuelve a casa en Navidad. Rebosa confianza en sí mismo, y él se ríe pensando que algunos lo consideran una bilbainada.', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'pedro', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'manuela', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
