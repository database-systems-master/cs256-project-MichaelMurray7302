CREATE SCHEMA project;

CREATE TABLE project.person(
    id CHAR(6) NOT NULL,
    birthday CHAR(10),
    name VARCHAR(80) NOT NULL
    writtenLanguage VARCHAR(30),
    genre VARCHAR(20)
);

CREATE TABLE project.production(
    company_name VARCHAR(80) NOT NULL,
    year_est CHAR (4)
);

CREATE TABLE project.distributor(
    company_name VARCHAR(80) NOT NULL,
    year_est CHAR (4)
);

CREATE TABLE project.movie(
    title VARCHAR (100) NOT NULL,
    release_date CHAR (10) NOT NULL,
    budget INT,
    boxoffice INT,
    rt_rating INT,
    imdb_rating INT
);

CREATE TABLE project.starsIn(
    id CHAR(6) NOT NULL,
    title VARCHAR (100) NOT NULL,
    release_date CHAR (10) NOT NULL,
    FOREIGN KEY (id) refrences project.person,
    FOREIGN KEY (title) refrences project.movie,
    FOREIGN KEY (release_date) refrences project.movie
);
