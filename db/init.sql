CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(500) NOT NULL
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    body VARCHAR(1000),
    img_url VARCHAR(300),
    karma INT DEFAULT 0,
    user_id INT REFERENCES users(user_id)
);