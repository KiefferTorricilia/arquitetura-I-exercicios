-- Active: 1685148258613@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT NOT NULL PRIMARY KEY UNIQUE,
    name TEXT NOT NULL,
    age INTEGER
);

INSERT INTO users (id, name, age)
VALUES
    ("a001", "Kieffer", 23),
    ("a002", "Arthur", 28),
    ("a003", "Everton", 27);

DROP TABLE users;