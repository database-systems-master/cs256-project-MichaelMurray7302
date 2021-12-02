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

--Writer
INSERT INTO project.person VALUES('0035', '06/09/1963', 'David Koepp');
INSERT INTO project.writes VALUES('0035', 'Spider-Man', '05/03/2002');

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

--Writer
INSERT INTO project.person VALUES('0036', '05/12/1927', 'Alvin Sargent');
INSERT INTO project.writes VALUES('0036', 'Spider-Man 2', '06/30/2004');

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

--Writer
INSERT INTO project.writes VALUES('0005', 'Spider-Man 3', '05/04/2007');
INSERT INTO project.person VALUES('0037', '06/21/1956', 'Ivan Raimi');
INSERT INTO project.writes VALUES('0037', 'Spider-Man 3', '05/04/2007');
INSERT INTO project.writes VALUES('0036', 'Spider-Man 3', '05/04/2007');

INSERT INTO project.produces VALUES('Marvel Entertainment', 'Spider-Man 3', '05/04/2007');
INSERT INTO project.produces VALUES('Columbia Pictures', 'Spider-Man 3', '05/04/2007');

--The Lighthouse
INSERT INTO project.movie VALUES ('The Lighthouse', '10/18/2019', 90, 7.5, 11000000, 18200000);

INSERT INTO project.productionCompany VALUES ('A24', '2012');
INSERT INTO project.productionCompany VALUES ('Regency Enterprises', '1982');

INSERT INTO project.person VALUES('0010', '05/13/1986', 'Robert Pattinson');

--Director
INSERT INTO project.person VALUES('0011', '07/07/1983', 'Robert Eggers');

--Writer
INSERT INTO project.writes VALUES('0011', 'The Lighthouse', '10/18/2019');

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

--Writes
INSERT INTO project.person VALUES('0038', '09/25/1970', 'David Benioff');
INSERT INTO project.writes VALUES('0038', 'Brothers', '12/04/2009');

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

--writer
INSERT INTO project.writes VALUES('0025', 'Star Wars: Episode I - The Phantom Menace', '05/19/1999');

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

--writer
INSERT INTO project.writes VALUES('0025', 'Star Wars: Episode II - Attack of the Clones', '05/16/2002');
INSERT INTO project.person VALUES('0041', '05/10/1937', 'Jonothan Hales');
INSERT INTO project.writes VALUES('0041', 'Star Wars: Episode II - Attack of the Clones', '05/16/2002');

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
INSERT INTO project.writes VALUES('0025', 'Star Wars: Episode III - Revenge of the Sith', '05/19/2005');

INSERT INTO project.produces VALUES('Lucasfilm Ltd. LLC', 'Star Wars: Episode III - Revenge of the Sith', '05/19/2005');

--Jumper
INSERT INTO project.movie VALUES ('Jumper', '02/14/2008', 15, 6.1, 85000000, 225100000);

INSERT INTO project.productionCompany VALUES ('New Regency Productions', '1982');

INSERT INTO project.person VALUES('0031', '08/25/1981', 'Rachel Bilsom');
INSERT INTO project.person VALUES('0032', '03/14/1986', 'Jamie Bell');
INSERT INTO project.person VALUES('0033', '04/09/1990', 'Kristen Stewart');

--director
INSERT INTO project.person VALUES('0034', '07/24/1965', 'Doug Liman');

--writer
INSERT INTO project.person VALUES('0039', '12/22/1965', 'David S. Goyer');
INSERT INTO project.writes VALUES('0039', 'Jumper', '02/14/2008');
INSERT INTO project.person VALUES('0040', '08/02/1973', 'Simon Kinberg');
INSERT INTO project.writes VALUES('0040', 'Jumper', '02/14/2008');

INSERT INTO project.starsIn VALUES('0023','Jumper', '02/14/2008');
INSERT INTO project.starsIn VALUES('0026','Jumper', '02/14/2008');
INSERT INTO project.starsIn VALUES('0031','Jumper', '02/14/2008');
INSERT INTO project.starsIn VALUES('0032','Jumper', '02/14/2008');
INSERT INTO project.starsIn VALUES('0033','Jumper', '02/14/2008');

INSERT INTO project.directs VALUES('0034','Jumper', '02/14/2008');

INSERT INTO project.produces VALUES('Regency Enterprises', 'Jumper', '02/14/2008');
INSERT INTO project.produces VALUES('New Regency Productions', 'Jumper', '02/14/2008');

-- EVERYTHING ABOVE ADDED TO THE DB

--Plan on adding at somepoint
--Pulp Fiction
--Django Unchained
--The Hateful Eight
--Star Wars: Episode IV - A New Hope
--Star Wars: Episode V - The Empire Strikes Back
--Star Wars: Episode VI - Return of the Jedi
--Raiders Of The Lost Ark
--Indiana Jones And The Temple Of Doom
--Indiana Jones And The Last Crusade
--Indiana Jones And The Kingdom Of The Crystal Skull
--Transformers
--Transformers: Revenge of the Fallen
--Transformers: Dark Of The Moon
--Transformers: Age of Extinction
--Transformers: The Last Knight
--The Avengers
--Avengers: Age of Ultron
--Avengers: Infinity Wars
--Avengers: Endgame
--Star Wars: Episode VII - The Force Awakens
--Star Wars: Episode VIII - The Last Jedi
--Star Wars: Episode IX - Rise of Skywalker
