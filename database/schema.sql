DROP DATABASE IF EXISTS kango;
CREATE DATABASE kango;
USE kango;



-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Shelter'
-- 
-- ---

DROP TABLE IF EXISTS Shelter;
		
CREATE TABLE Shelter (
  id INTEGER NOT NULL AUTO_INCREMENT,
  Name VARCHAR(20) NOT NULL,
  ImageUrl VARCHAR(50) NULL DEFAULT NULL,
  Address1 VARCHAR(50) NOT NULL,
  Address2 VARCHAR(50) NULL DEFAULT NULL,
  City VARCHAR(25) NOT NULL,
  State VARCHAR(25) NOT NULL,
  Zip INTEGER(10) NOT NULL,
  Telephone VARCHAR(20) NOT NULL,
  Description VARCHAR(500) NOT NULL,
  Email VARCHAR(30) NOT NULL,
  TotalRaised DECIMAL(25) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'User'
-- 
-- ---

DROP TABLE IF EXISTS User;
		
CREATE TABLE User (
  id INTEGER NOT NULL AUTO_INCREMENT,
  FirstName VARCHAR(25) NOT NULL,
  LastName VARCHAR(25) NOT NULL,
  ImageUrl VARCHAR(50) NOT NULL,
  Email VARCHAR(30) NOT NULL,
  Password VARCHAR(25) NOT NULL,
  Address1 VARCHAR(50) NULL DEFAULT NULL,
  Address2 VARCHAR(50) NULL DEFAULT NULL,
  City VARCHAR(25) NULL DEFAULT NULL,
  State VARCHAR(25) NULL DEFAULT NULL,
  Zip INTEGER(10) NULL DEFAULT NULL,
  Telephone VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Project'
-- 
-- ---

DROP TABLE IF EXISTS Project;
		
CREATE TABLE Project (
  id INTEGER NOT NULL AUTO_INCREMENT,
  id_Shelter INTEGER NOT NULL,
  Title VARCHAR(30) NOT NULL,
  Description VARCHAR(2000) NOT NULL,
  Goal DECIMAL(25) NOT NULL,
  Raised DECIMAL(25) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Transaction'
-- 
-- ---

DROP TABLE IF EXISTS Transaction;
		
CREATE TABLE Transaction (
  id INTEGER NOT NULL AUTO_INCREMENT,
  id_Project INTEGER NOT NULL,
  id_User INTEGER NOT NULL,
  FirstName VARCHAR(25) NULL DEFAULT NULL,
  LastName VARCHAR(25) NULL DEFAULT NULL,
  Amount DECIMAL(25) NOT NULL,
  Comment VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Image'
-- 
-- ---

DROP TABLE IF EXISTS Image;
		
CREATE TABLE Image (
  id INTEGER NOT NULL AUTO_INCREMENT,
  id_Project INTEGER NOT NULL,
  Url VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE Project ADD FOREIGN KEY (id_Shelter) REFERENCES Shelter (id);
ALTER TABLE Transaction ADD FOREIGN KEY (id_Project) REFERENCES Project (id);
ALTER TABLE Transaction ADD FOREIGN KEY (id_User) REFERENCES User (id);
ALTER TABLE Image ADD FOREIGN KEY (id_Project) REFERENCES Project (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE Shelter ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE User ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Project ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Transaction ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Image ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO Shelter (id,Name,ImageUrl,Address1,Address2,City,State,Zip,Telephone,Description,Email,TotalRaised) VALUES
-- ('','','','','','','','','','','','');
-- INSERT INTO User (id,FirstName,LastName,ImageUrl,Email,Password,Address1,Address2,City,State,Zip,Telephone) VALUES
-- ('','','','','','','','','','','','');
-- INSERT INTO Project (id,id_Shelter,Title,Description,Goal,Raised) VALUES
-- ('','','','','','');
-- INSERT INTO Transaction (id,id_Project,id_User,FirstName,LastName,Amount,Comment) VALUES
-- ('','','','','','','');
-- INSERT INTO Image (id,id_Project,Url) VALUES
-- ('','','');

