-- MySQL dump 10.13  Distrib 5.7.12, for Win32 (AMD64)
--
-- Host: 127.0.0.1    Database: ezequiel_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.38-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `productId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'image-1618319126525.png','http://placeimg.com/640/480/cats',1,'2021-04-13 02:06:28','2021-04-13 13:05:26'),(2,'image-1618319164824.png','http://placeimg.com/640/480/animals',2,'2021-04-13 02:06:28','2021-04-13 13:06:05'),(3,'image-1618319205223.png','http://placeimg.com/640/480/transport',3,'2021-04-13 02:06:28','2021-04-13 13:06:45'),(4,'image-1618319214604.png','http://placeimg.com/640/480/fashion',4,'2021-04-13 02:06:28','2021-04-13 13:06:54'),(6,'image-1618319664161.jpg','http://placeimg.com/640/480/nature',6,'2021-04-13 02:06:28','2021-04-13 13:14:24'),(7,'image-1618319976648.jpg','http://placeimg.com/640/480/cats',7,'2021-04-13 02:06:28','2021-04-13 13:19:36'),(8,'image-1618320031523.jpg','http://placeimg.com/640/480/fashion',8,'2021-04-13 02:06:28','2021-04-13 13:20:31'),(9,'image-1618320397131.jpg','http://placeimg.com/640/480/city',9,'2021-04-13 02:06:28','2021-04-13 13:26:38'),(10,'image-1618320462541.jpg','http://placeimg.com/640/480/sports',10,'2021-04-13 02:06:28','2021-04-13 13:27:42'),(11,'image-1618320499073.png','http://placeimg.com/640/480/food',11,'2021-04-13 02:06:28','2021-04-13 13:28:19'),(12,'image-1618320908820.jpg','http://placeimg.com/640/480/people',12,'2021-04-13 02:06:28','2021-04-13 13:35:09'),(13,'image-1618321213269.jpg','http://placeimg.com/640/480/cats',13,'2021-04-13 02:06:28','2021-04-13 13:40:13'),(14,'image-1618321248934.jpg','http://placeimg.com/640/480/technics',14,'2021-04-13 02:06:28','2021-04-13 13:40:49'),(15,'image-1618321340839.jpg','http://placeimg.com/640/480/people',15,'2021-04-13 02:06:28','2021-04-13 13:42:20'),(16,'image-1618321384945.jpg','http://placeimg.com/640/480/food',16,'2021-04-13 02:06:28','2021-04-13 13:43:05'),(17,'image-1618321698024.jpg','http://placeimg.com/640/480/fashion',17,'2021-04-13 02:06:28','2021-04-13 13:48:18'),(18,'image-1618321769600.jpg','http://placeimg.com/640/480/food',18,'2021-04-13 02:06:28','2021-04-13 13:49:29'),(19,'image-1618321813509.jpg','http://placeimg.com/640/480/animals',19,'2021-04-13 02:06:28','2021-04-13 13:50:13'),(21,'image-1618339010900.jpg','http://placeimg.com/640/480/nightlife',21,'2021-04-13 02:06:28','2021-04-13 18:36:51'),(22,'image-1618339045164.jpg','http://placeimg.com/640/480/transport',22,'2021-04-13 02:06:28','2021-04-13 18:37:25'),(23,'image-1618339082901.jpg','http://placeimg.com/640/480/nightlife',23,'2021-04-13 02:06:28','2021-04-13 18:38:03'),(24,'image-1618339149087.jpg','http://placeimg.com/640/480/fashion',24,'2021-04-13 02:06:28','2021-04-13 18:39:09'),(25,'image-1618339357542.jpg','http://placeimg.com/640/480/nature',25,'2021-04-13 02:06:28','2021-04-13 18:42:37'),(26,'image-1618339783961.jpg','http://placeimg.com/640/480/sports',26,'2021-04-13 02:06:28','2021-04-13 18:49:44'),(27,'image-1618339851720.jpg','http://placeimg.com/640/480/transport',27,'2021-04-13 02:06:28','2021-04-13 18:50:51'),(28,'image-1618339398709.jpg','http://placeimg.com/640/480/abstract',28,'2021-04-13 02:06:28','2021-04-13 18:43:19'),(29,'image-1618338680595.jpg','http://placeimg.com/640/480/food',29,'2021-04-13 02:06:28','2021-04-13 18:31:21'),(31,'image-1618339898117.jpg','',32,'2021-04-13 18:51:38','2021-04-13 18:51:38');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-13 16:09:22
