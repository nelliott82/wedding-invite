DROP DATABASE IF EXISTS invites;

CREATE DATABASE invites;

USE invites;

CREATE TABLE `admin`(
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `key` TEXT NOT NULL,
  `username` TEXT NOT NULL,
  `hashword` TEXT NOT NULL
);

CREATE TABLE `invitees`(
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `uuid` TEXT NOT NULL,
  `email` TEXT NOT NULL,
  `guests` INT NOT NULL,
  `attending` BOOLEAN
);