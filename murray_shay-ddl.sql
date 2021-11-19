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
    imdb_rating INT,
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
  FOREIGN KEY (id) REFERENCES project.person,
  FOREIGN KEY (movie_title) REFERENCES project.movie(movie_title),
  FOREIGN KEY (release_date) REFERENCES project.movie(release_date)
);

CREATE TABLE project.starsIn(
  id CHAR(4),
  movie_title VARCHAR(100),
  release_date CHAR(10),
  FOREIGN KEY (id) REFERENCES project.person,
  FOREIGN KEY (movie_title) REFERENCES project.movie(movie_title),
  FOREIGN KEY (release_date) REFERENCES project.movie(release_date)
);

-- TEST VALUES

INSERT INTO project.person VALUES ('0000', '11/13/2001', 'Peter Shay');
INSERT INTO project.person VALUES ('0001', '07/03/2002', 'Mike Murray');
INSERT INTO project.person VALUES ('0002', '06/30/2001', 'Ryan Williams');
INSERT INTO project.person VALUES ('0003', '02/01/2002', 'Carl Yaz');
INSERT INTO project.person VALUES ('0004', '10/07/2002', 'Catal Ormando');
INSERT INTO project.person VALUES ('0005', '11/12/2001', 'Cloe Maz');

INSERT INTO project.movie VALUES ('Movie1', '11/19/2021', 85, 7, 10000, 20000);
INSERT INTO project.movie VALUES ('Movie2', '11/19/2022', 86, 7.4, 11000, 21000);
INSERT INTO project.movie VALUES ('Movie3', '11/19/2023', 40, 3.5, 5000, 4000);

INSERT INTO project.directs VALUES ('0000', 'Movie1', '11/19/2021');
INSERT INTO project.directs VALUES ('0000', 'Movie2', '11/19/2022');
INSERT INTO project.directs VALUES ('0001', 'Movie3', '11/19/2023');

INSERT INTO project.starsIn VALUES('0002', 'Movie2', '11/19/2022');
INSERT INTO project.starsIn VALUES('0003', 'Movie2', '11/19/2022');

INSERT INTO project.starsIn VALUES('0004', 'Movie1', '11/19/2021');
INSERT INTO project.starsIn VALUES('0005', 'Movie1', '11/19/2021');
