CREATE SCHEMA project;

CREATE TABLE project.person(
    id CHAR(4) NOT NULL,
    birthday CHAR(10),
    name VARCHAR(80) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE project.movie(
    movie_title VARCHAR (100),
    release_date CHAR (10),
    rt_rating INT,
    imdb_rating FLOAT,
    budget INT,
    boxoffice INT,
    PRIMARY KEY(movie_title, release_date)
);

CREATE TABLE project.productionCompany(
    company_name VARCHAR(80),
    year_est CHAR (4),
    PRIMARY KEY(company_name)
);

CREATE TABLE project.directs(
  id CHAR(4),
  movie_title VARCHAR(100),
  release_date CHAR(10),
  PRIMARY KEY (id, movie_title, release_date),
  FOREIGN KEY (id) REFERENCES project.person,
  FOREIGN KEY (movie_title, release_date) REFERENCES project.movie (movie_title,release_date)
);

CREATE TABLE project.starsIn(
  id CHAR(4),
  movie_title VARCHAR(100),
  release_date CHAR(10),
  PRIMARY KEY (id, movie_title, release_date),
  FOREIGN KEY (id) REFERENCES project.person,
  FOREIGN KEY (movie_title, release_date) REFERENCES project.movie (movie_title,release_date)
);

CREATE TABLE project.produces(
  company_name VARCHAR(80),
  movie_title VARCHAR(100),
  release_date CHAR(10),
  PRIMARY KEY (company_name, movie_title, release_date),
  FOREIGN KEY (company_name) REFERENCES project.productionCompany,
  FOREIGN KEY (movie_title, release_date) REFERENCES project.movie (movie_title,release_date)
);

CREATE TABLE project.writes(
  id CHAR(4),
  movie_title VARCHAR(100),
  release_date CHAR(10),
  PRIMARY KEY (id, movie_title, release_date),
  FOREIGN KEY (id) REFERENCES project.person,
  FOREIGN KEY (movie_title, release_date) REFERENCES project.movie (movie_title,release_date)
);
