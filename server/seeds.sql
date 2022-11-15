INSERT INTO users (userID, name, dob, gender, email, password)
VALUES (1, 'Marianne Bourcier', '1995-03-03', 'F', 'marianneb@gmail.com', 'password');

INSERT INTO user_nutrition (userID, calories, fat, protein, carbohydrate, date)
VALUES (1, 1600, 55, 150, 150, '2022-11-14');

INSERT INTO user_metrics (userID, date, weight, height, bodyfat)
VALUES (1, '2022-11-14', 150, 150, 25);