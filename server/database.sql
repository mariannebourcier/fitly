-- CREATE DATABASE fitly;
-- Reset Database
-- \i server/database.sql

DROP TABLE IF EXISTS user CASCADE;
DROP TABLE IF EXISTS user_nutrition;
DROP TABLE IF EXISTS user_metrics;


CREATE TABLE users(
  userID SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  dob DATE NOT NULL,
  gender VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE user_nutrition(
  userID SERIAL PRIMARY KEY NOT NULL,
  calories INTEGER,
  fat INTEGER,
  protein INTEGER,
  carbohydrate INTEGER
);

CREATE TABLE user_metrics(
  userID SERIAL PRIMARY KEY NOT NULL,
  date DATE NOT NULL,
  weight INTEGER,
  height INTEGER,
  bodyfat INTEGER
);