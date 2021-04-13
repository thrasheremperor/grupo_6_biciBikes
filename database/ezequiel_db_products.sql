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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `makeId` int(11) NOT NULL,
  `modelId` int(11) DEFAULT NULL,
  `colorId` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `description` varchar(255) NOT NULL,
  `discountId` int(11) DEFAULT NULL,
  `categoryId` int(11) NOT NULL,
  `sectionId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `makeId` (`makeId`),
  KEY `modelId` (`modelId`),
  KEY `colorId` (`colorId`),
  KEY `discountId` (`discountId`),
  KEY `categoryId` (`categoryId`),
  KEY `sectionId` (`sectionId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`makeId`) REFERENCES `makes` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`modelId`) REFERENCES `models` (`id`),
  CONSTRAINT `products_ibfk_3` FOREIGN KEY (`colorId`) REFERENCES `colors` (`id`),
  CONSTRAINT `products_ibfk_4` FOREIGN KEY (`discountId`) REFERENCES `discounts` (`id`),
  CONSTRAINT `products_ibfk_5` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_ibfk_6` FOREIGN KEY (`sectionId`) REFERENCES `sections` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'MTB Concrete Soap',7,2,3,345,'The Football Is Good For Training And Recreational Purposes',5,1,3,'2021-04-13 02:06:28','2021-04-13 18:44:14'),(2,'MTB Cotton Chicken',6,2,7,5520,'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',7,1,3,'2021-04-13 02:06:28','2021-04-13 18:44:05'),(3,'MTB Soft Pants',4,5,3,578,'Boston\'s most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles',7,1,2,'2021-04-13 02:06:28','2021-04-13 18:43:56'),(4,'MTB Granite Bacon',7,2,2,690,'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',6,1,1,'2021-04-13 02:06:28','2021-04-13 13:21:21'),(6,'BMX Carbon white',2,6,3,6960,'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',4,5,3,'2021-04-13 02:06:28','2021-04-13 13:19:52'),(7,' RUTA Best experiencie',6,5,2,141,'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',2,6,2,'2021-04-13 02:06:28','2021-04-13 18:44:28'),(8,' RUTA Gorgeous Wooden Cheese',6,1,2,73100,'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',2,6,2,'2021-04-13 02:06:28','2021-04-13 18:44:40'),(9,' Route Handcrafted',6,1,3,62400,'Boston\'s most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles',2,6,1,'2021-04-13 02:06:28','2021-04-13 18:44:49'),(10,'RUTA georgus',5,7,3,2370,'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',2,6,1,'2021-04-13 02:06:28','2021-04-13 18:45:18'),(11,'MTB Frozen Computer',6,3,4,83700,'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',5,1,3,'2021-04-13 02:06:28','2021-04-13 18:45:02'),(12,'BMX Cotton Salad',1,1,2,27000,'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',2,5,1,'2021-04-13 02:06:28','2021-04-13 13:35:08'),(13,'Kids cycle',4,6,7,36000,'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',2,4,3,'2021-04-13 02:06:28','2021-04-13 13:40:13'),(14,'Kids trick',4,6,6,30000,'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',1,4,3,'2021-04-13 02:06:28','2021-04-13 13:40:48'),(15,'Kids little Chicken',4,6,4,48000,'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',2,4,3,'2021-04-13 02:06:28','2021-04-13 13:42:20'),(16,'Kids Soft Bike',4,3,2,52499,'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',1,4,1,'2021-04-13 02:06:28','2021-04-13 13:43:04'),(17,'Plegable Fantastic',3,5,4,14000,'The Football Is Good For Training And Recreational Purposes',1,3,2,'2021-04-13 02:06:28','2021-04-13 13:48:18'),(18,'Plegable Rustic Ball',7,5,6,12703,'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',1,3,3,'2021-04-13 02:06:28','2021-04-13 13:49:29'),(19,'Plegable Frozen Chair',2,3,2,77899,'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',1,3,2,'2021-04-13 02:06:28','2021-04-13 13:50:13'),(21,'City Ergonomic Table',3,1,4,33700,'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',3,2,2,'2021-04-13 02:06:28','2021-04-13 18:36:50'),(22,'CiudadRubber Shirt',6,7,7,42100,'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',5,2,1,'2021-04-13 02:06:28','2021-04-13 18:37:25'),(23,'Ciudad Steel Fish',2,7,1,89500,'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',6,2,3,'2021-04-13 02:06:28','2021-04-13 18:38:02'),(24,'Ciudad Soft Shirt',6,7,7,92200,'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',7,2,2,'2021-04-13 02:06:28','2021-04-13 18:39:09'),(25,'BMX Soft Chicken',7,4,7,25000,'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',6,5,1,'2021-04-13 02:06:28','2021-04-13 18:43:47'),(26,'Electrica Metal Hat',3,3,2,38400,'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',7,7,3,'2021-04-13 02:06:28','2021-04-13 18:49:44'),(27,'Electrica Cotton Soap',2,2,7,56200,'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',4,7,1,'2021-04-13 02:06:28','2021-04-13 18:50:51'),(28,'BMXGranite Soap',2,5,3,47500,'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',6,5,3,'2021-04-13 02:06:28','2021-04-13 18:43:34'),(29,'Plegable sleek frozen',3,1,3,7320,'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',1,3,3,'2021-04-13 02:06:28','2021-04-13 18:31:20'),(32,'Electrica Master road',7,NULL,4,123000,'Awesome stun bike',3,7,NULL,'2021-04-13 18:51:38','2021-04-13 18:51:38');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
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
