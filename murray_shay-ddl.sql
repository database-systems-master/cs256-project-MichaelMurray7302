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
    PRIMARY KEY(movie_title)
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
  FOREIGN KEY (movie_title) REFERENCES project.movie(movie_title)
  --FOREIGN KEY (release_date) REFERENCES project.movie(release_date)
);

CREATE TABLE project.starsIn(
  id CHAR(4),
  movie_title VARCHAR(100),
  release_date CHAR(10),
  PRIMARY KEY (id, movie_title, release_date),
  FOREIGN KEY (id) REFERENCES project.person,
  FOREIGN KEY (movie_title) REFERENCES project.movie(movie_title)
  --FOREIGN KEY (release_date) REFERENCES project.movie(release_date)
);

CREATE TABLE project.produces(
  company_name VARCHAR(80),
  movie_title VARCHAR(100),
  release_date CHAR(10),
  PRIMARY KEY (company_name, movie_title, release_date),
  FOREIGN KEY (company_name) REFERENCES project.productionCompany,
  FOREIGN KEY (movie_title) REFERENCES project.movie(movie_title)
  --FOREIGN KEY (release_date) REFERENCES project.movie(release_date)
);

-- Spider-Man (2002)
INSERT INTO project.movie VALUES ('Spider-Man', '05/03/2002', 90, 7.3, 139000000, 821700000);

INSERT INTO project.productionCompany VALUES ('Marvel Entertainment', '1998');
INSERT INTO project.productionCompany VALUES ('Columbia Pictures', '1918');

INSERT INTO project.person VALUES ('0000', '06/27/1975', 'Tobey Maguire');
INSERT INTO project.person VALUES ('0001', '04/30/1982', 'Kristen Dunst');
INSERT INTO project.person VALUES ('0002', '07/22/1955', 'Willem Dafoe');
INSERT INTO project.person VALUES ('0003', '04/19/1978', 'James Franco');
INSERT INTO project.person VALUES ('0004', '01/09/1955', 'J K Simmons');

--Director
INSERT INTO project.person VALUES ('0005', '10/23/1959', 'Sam Raimi');

INSERT INTO project.starsIn VALUES('0000', 'Spider-Man', '05/03/2002');
INSERT INTO project.starsIn VALUES('0001', 'Spider-Man', '05/03/2002');
INSERT INTO project.starsIn VALUES('0002', 'Spider-Man', '05/03/2002');
INSERT INTO project.starsIn VALUES('0003', 'Spider-Man', '05/03/2002');
INSERT INTO project.starsIn VALUES('0004', 'Spider-Man', '05/03/2002');

INSERT INTO project.directs VALUES ('0005', 'Spider-Man', '05/03/2002');

INSERT INTO project.produces VALUES('Marvel Entertainment', 'Spider-Man', '05/03/2002');
INSERT INTO project.produces VALUES('Columbia Pictures', 'Spider-Man', '05/03/2002');

-- Spider-Man 2 (2004)
INSERT INTO project.movie VALUES ('Spider-Man 2', '06/30/2004', 93, 7.3, 200000000, 789000000);

INSERT INTO project.person VALUES ('0006', '05/24/1953', 'Alfred Molina');

INSERT INTO project.starsIn VALUES('0000', 'Spider-Man 2', '06/30/2004');
INSERT INTO project.starsIn VALUES('0001', 'Spider-Man 2', '06/30/2004');
INSERT INTO project.starsIn VALUES('0002', 'Spider-Man 2', '06/30/2004');
INSERT INTO project.starsIn VALUES('0003', 'Spider-Man 2', '06/30/2004');
INSERT INTO project.starsIn VALUES('0004', 'Spider-Man 2', '06/30/2004');
INSERT INTO project.starsIn VALUES('0006', 'Spider-Man 2', '06/30/2004');

INSERT INTO project.directs VALUES ('0005', 'Spider-Man 2', '06/30/2004');

INSERT INTO project.produces VALUES('Marvel Entertainment', 'Spider-Man 2', '06/30/2004');
INSERT INTO project.produces VALUES('Columbia Pictures', 'Spider-Man 2', '06/30/2004');

--Spider-Man 3(2007)
INSERT INTO project.movie VALUES ('Spider-Man 3', '05/04/2007', 63, 6.2, 250000000, 89490000);

INSERT INTO project.person VALUES ('0007', '06/17/1960', 'Thomas Haden Church');
INSERT INTO project.person VALUES ('0008', '07/12/1978', 'Topher Grace');
INSERT INTO project.person VALUES ('0009', '03/02/1981', 'Bryce Dallas Howard');

INSERT INTO project.starsIn VALUES('0000', 'Spider-Man 3', '05/04/2007');
INSERT INTO project.starsIn VALUES('0001', 'Spider-Man 3', '05/04/2007');
INSERT INTO project.starsIn VALUES('0002', 'Spider-Man 3', '05/04/2007');
INSERT INTO project.starsIn VALUES('0003', 'Spider-Man 3', '05/04/2007');
INSERT INTO project.starsIn VALUES('0004', 'Spider-Man 3', '05/04/2007');
INSERT INTO project.starsIn VALUES('0007', 'Spider-Man 3', '05/04/2007');
INSERT INTO project.starsIn VALUES('0008', 'Spider-Man 3', '05/04/2007');
INSERT INTO project.starsIn VALUES('0009', 'Spider-Man 3', '05/04/2007');

INSERT INTO project.directs VALUES ('0005', 'Spider-Man 3', '05/04/2007');

INSERT INTO project.produces VALUES('Marvel Entertainment', 'Spider-Man 3', '05/04/2007');
INSERT INTO project.produces VALUES('Columbia Pictures', 'Spider-Man 3', '05/04/2007');

--The Lighthouse
INSERT INTO project.movie VALUES ('The Lighthouse', '10/18/2019', 90, 7.5, 11000000, 18200000);

INSERT INTO project.productionCompany VALUES ('A24', '2012');
INSERT INTO project.productionCompany VALUES ('Regency Enterprises', '1982');

INSERT INTO project.person VALUES('0010', '05/13/1986', 'Robert Pattinson');

--Director
INSERT INTO project.person VALUES('0011', '07/07/1983', 'Robert Eggers');

INSERT INTO project.starsIn VALUES('0002', 'The Lighthouse', '10/18/2019');
INSERT INTO project.starsIn VALUES('0010', 'The Lighthouse', '10/18/2019');

INSERT INTO project.directs VALUES ('0011', 'The Lighthouse', '10/18/2019');

INSERT INTO project.produces VALUES('A24', 'The Lighthouse', '10/18/2019');
INSERT INTO project.produces VALUES('Regency Enterprises', 'The Lighthouse', '10/18/2019');

--Brothers
INSERT INTO project.movie VALUES ('Brothers', '12/04/2009', 64, 7.1, 26000000, 43500000);

INSERT INTO project.productionCompany VALUES ('Michael De Luca Productions', '2004');
INSERT INTO project.productionCompany VALUES ('Relativity Media', '2004');

INSERT INTO project.person VALUES('0012', '12/19/1980', 'Jake Gyllenhaal');
INSERT INTO project.person VALUES('0013', '06/09/1981', 'Natalie Portman');
INSERT INTO project.person VALUES('0014', '10/15/1999', 'Bailee Madison');
INSERT INTO project.person VALUES('0015', '11/05/1943', 'Sam Shepard');

--Director
INSERT INTO project.person VALUES('0016', '02/06/1949', 'Jim Sheridan');

INSERT INTO project.starsIn VALUES('0000', 'Brothers', '12/04/2009');
INSERT INTO project.starsIn VALUES('0012', 'Brothers', '12/04/2009');
INSERT INTO project.starsIn VALUES('0013', 'Brothers', '12/04/2009');
INSERT INTO project.starsIn VALUES('0014', 'Brothers', '12/04/2009');
INSERT INTO project.starsIn VALUES('0015', 'Brothers', '12/04/2009');

INSERT INTO project.directs VALUES('0016', 'Brothers', '12/04/2009');

INSERT INTO project.produces VALUES('Michael De Luca Productions', 'Brothers', '12/04/2009');
INSERT INTO project.produces VALUES('Relativity Media', 'Brothers', '12/04/2009');

--Star Wars: Episode I - The Phantom Menace
INSERT INTO project.movie VALUES ('Star Wars: Episode I - The Phantom Menace', '05/19/1999', 52, 6.5, 150000000, 1027000000);

INSERT INTO project.productionCompany VALUES ('Lucasfilm Ltd. LLC', '1971');

INSERT INTO project.person VALUES('0017', '06/07/1952', 'Liam Neeson');
INSERT INTO project.person VALUES('0018', '03/31/1971', 'Ewan McGregor');
INSERT INTO project.person VALUES('0019', '03/05/1989', 'Jake Lloyd');
INSERT INTO project.person VALUES('0020', '08/11/1944', 'Ian McDiarmid');
INSERT INTO project.person VALUES('0021', '02/21/1946', 'Anthony Daniel');
INSERT INTO project.person VALUES('0022', '08/24/1934', 'Kenny Baker');
INSERT INTO project.person VALUES('0023', '12/21/1948', 'Samuel L. Jackson');
INSERT INTO project.person VALUES('0024', '08/23/1974', 'Ray Park');

--Director
INSERT INTO project.person VALUES('0025', '05/14/1944', 'George Lucas');

INSERT INTO project.starsIn VALUES('0013','Star Wars: Episode I - The Phantom Menace', '05/19/1999');
INSERT INTO project.starsIn VALUES('0017','Star Wars: Episode I - The Phantom Menace', '05/19/1999');
INSERT INTO project.starsIn VALUES('0018','Star Wars: Episode I - The Phantom Menace', '05/19/1999');
INSERT INTO project.starsIn VALUES('0019','Star Wars: Episode I - The Phantom Menace', '05/19/1999');
INSERT INTO project.starsIn VALUES('0020','Star Wars: Episode I - The Phantom Menace', '05/19/1999');
INSERT INTO project.starsIn VALUES('0021','Star Wars: Episode I - The Phantom Menace', '05/19/1999');
INSERT INTO project.starsIn VALUES('0022','Star Wars: Episode I - The Phantom Menace', '05/19/1999');
INSERT INTO project.starsIn VALUES('0023','Star Wars: Episode I - The Phantom Menace', '05/19/1999');
INSERT INTO project.starsIn VALUES('0024','Star Wars: Episode I - The Phantom Menace', '05/19/1999');

INSERT INTO project.directs VALUES('0025','Star Wars: Episode I - The Phantom Menace', '05/19/1999');

INSERT INTO project.produces VALUES('Lucasfilm Ltd. LLC', 'Star Wars: Episode I - The Phantom Menace', '05/19/1999');

--Star Wars: Episode II - Attack of the Clones
INSERT INTO project.movie VALUES ('Star Wars: Episode II - Attack of the Clones', '05/16/2002', 65, 6.5, 115000000, 653800000);

INSERT INTO project.person VALUES('0026', '04/19/1981', 'Hayden Christensen');
INSERT INTO project.person VALUES('0027', '12/26/1960', 'Temuera Morrison');
INSERT INTO project.person VALUES('0028', '05/27/1922', 'Christopher Lee');


INSERT INTO project.starsIn VALUES('0013','Star Wars: Episode II - Attack of the Clones', '05/16/2002');
INSERT INTO project.starsIn VALUES('0018','Star Wars: Episode II - Attack of the Clones', '05/16/2002');
INSERT INTO project.starsIn VALUES('0020','Star Wars: Episode II - Attack of the Clones', '05/16/2002');
INSERT INTO project.starsIn VALUES('0021','Star Wars: Episode II - Attack of the Clones', '05/16/2002');
INSERT INTO project.starsIn VALUES('0022','Star Wars: Episode II - Attack of the Clones', '05/16/2002');
INSERT INTO project.starsIn VALUES('0023','Star Wars: Episode II - Attack of the Clones', '05/16/2002');
INSERT INTO project.starsIn VALUES('0026','Star Wars: Episode II - Attack of the Clones', '05/16/2002');
INSERT INTO project.starsIn VALUES('0027','Star Wars: Episode II - Attack of the Clones', '05/16/2002');
INSERT INTO project.starsIn VALUES('0028','Star Wars: Episode II - Attack of the Clones', '05/16/2002');

INSERT INTO project.directs VALUES('0025','Star Wars: Episode II - Attack of the Clones', '05/16/2002');

INSERT INTO project.produces VALUES('Lucasfilm Ltd. LLC', 'Star Wars: Episode II - Attack of the Clones', '05/16/2002');

--Star Wars: Episode III - Revenge of the Sith
INSERT INTO project.movie VALUES ('Star Wars: Episode III - Revenge of the Sith', '05/19/2005', 80, 7.5, 113000000, 868400000);

INSERT INTO project.person VALUES('0029', '07/09/1955', 'Jimmy Smits');
INSERT INTO project.person VALUES('0030', '06/23/1974', 'Joel Edgerton');

INSERT INTO project.starsIn VALUES('0013','Star Wars: Episode III - Revenge of the Sith', '05/19/2005');
INSERT INTO project.starsIn VALUES('0018','Star Wars: Episode III - Revenge of the Sith', '05/19/2005');
INSERT INTO project.starsIn VALUES('0020','Star Wars: Episode III - Revenge of the Sith', '05/19/2005');
INSERT INTO project.starsIn VALUES('0021','Star Wars: Episode III - Revenge of the Sith', '05/19/2005');
INSERT INTO project.starsIn VALUES('0022','Star Wars: Episode III - Revenge of the Sith', '05/19/2005');
INSERT INTO project.starsIn VALUES('0023','Star Wars: Episode III - Revenge of the Sith', '05/19/2005');
INSERT INTO project.starsIn VALUES('0026','Star Wars: Episode III - Revenge of the Sith', '05/19/2005');
INSERT INTO project.starsIn VALUES('0027','Star Wars: Episode III - Revenge of the Sith', '05/19/2005');
INSERT INTO project.starsIn VALUES('0028','Star Wars: Episode III - Revenge of the Sith', '05/19/2005');
INSERT INTO project.starsIn VALUES('0029','Star Wars: Episode III - Revenge of the Sith', '05/19/2005');
INSERT INTO project.starsIn VALUES('0030','Star Wars: Episode III - Revenge of the Sith', '05/19/2005');

INSERT INTO project.directs VALUES('0025','Star Wars: Episode III - Revenge of the Sith', '05/19/2005');

INSERT INTO project.produces VALUES('Lucasfilm Ltd. LLC', 'Star Wars: Episode III - Revenge of the Sith', '05/19/2005');

--SQL TEST QUERIES--
-- SELECT * FROM project.person NATURAL JOIN project.directs;
-- SELECT * FROM project.person NATURAL JOIN project.starsIn Natural JOIN project.movie WHERE person.name = 'Natalie Portman';
-- SELECT * FROM project.movie;
--SELECT * FROM project.produces NATURAL JOIN project.movie WHERE company_name = 'Marvel Entertainment' AND rt_rating >= 90;
