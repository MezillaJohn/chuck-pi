-- -- CREATE TABLE users (
-- --     user_id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
-- --     user_name varchar(50) NOT NULL UNIQUE,
-- --     email varchar(255) NOT NULL UNIQUE
-- -- );

-- -- ALTER TABLE users
-- -- ADD COLUMN name varchar(50) NOT NULL

-- -- DROP TABLE users

-- -- INSERT INTO users (user_name, email)
-- -- VALUES ('john', 'john@gmail.com');

-- -- UPDATE users
-- -- SET user_name = 'Mike'
-- -- WHERE user_id = 1;

-- -- DELETE FROM users
-- -- WHERE user_id = 1;

-- -- CREATE TABLE posts (
-- --     title text NOT NULL,
-- --     body text NOT NULL,
-- --     user_id int REFERENCES users(user_id)
-- -- );




-- SELECT * FROM posts
-- INNER JOIN users
-- ON posts.user_id = users.user_id;