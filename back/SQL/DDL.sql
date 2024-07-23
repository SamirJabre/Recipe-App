CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
);

CREATE TABLE Recipes (
    recipe_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    recipe_id INT,
    user_id INT,
    comment_content TEXT,
    FOREIGN KEY (recipe_id) REFERENCES Recipes(recipe_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);