INSERT INTO posts (title, body, img_url, user_id)
VALUES
($1, $2, $3);

SELECT * FROM posts;