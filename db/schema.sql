CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN default 0,
date timestamp
);