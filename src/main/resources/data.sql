TRUNCATE TABLE Country;

CREATE TABLE IF NOT EXISTS Country (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO Country (id, name) VALUES (100, 'USA');
INSERT INTO Country (id, name) VALUES (200, 'UAE');
INSERT INTO Country (id, name) VALUES (300, 'Switzerland');
INSERT INTO Country (id, name) VALUES (400, 'Turkey');
INSERT INTO Country (id, name) VALUES (500, 'Japan');
