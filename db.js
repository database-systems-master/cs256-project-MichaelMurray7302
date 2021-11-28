const tunnel = require('tunnel-ssh')
const Pool = require('pg').Pool
require('dotenv').config();
console.log("am i on heroku")
console.log(process.env.HEROKU)
// Read in the ssh tunnel details from .env
let sshConfig = {
    host: process.env.SSH_HOST,
    port: 22,
    username: process.env.SSH_USER,
    ...(process.env.HEROKU ? {privateKey: process.env.SSH_KEY} : {privateKey: require('fs').readFileSync(process.env.SSH_PRIVATE_KEY)}),
    passphrase: process.env.SSH_PASSPHRASE,
    keepaliveInterval: 60000,
    keepAlive: true,
    dstHost: process.env.REMOTE_HOST,
    dstPort: process.env.REMOTE_PORT,
    localHost: process.env.LOCAL_HOST,
    localPort: process.env.LOCAL_PORT
};

// Initiate asynchronous ssh connection
var server = new Promise(function(resolve, reject){

  // Create tunnel for port forwarding
	tunnel(sshConfig, function (error, server) {
    if(error){
        console.log("SSH connection error: " + error);
    }
    console.log('Database connection initalizing');

		//Connect to postgres instance
		db = new Pool({
				database: process.env.DATABASE_NAME,
				port:     process.env.LOCAL_PORT,
				user:     process.env.SSH_USER,
				password:	process.env.DATABASE_PASSWORD
		});

		// send back the database connection once
		// the asynchronous ssh connection is made
		resolve(db)
	});
});

// Get all movies
const getMovies = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT movie_title FROM project.movie ORDER BY movie_title', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

const getActor = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT DISTINCT name, birthday FROM project.person NATURAL JOIN project.starsIn ORDER BY name', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

const getDirectors = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT DISTINCT name, birthday FROM project.person NATURAL JOIN project.directs ORDER BY name', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

const getproducctionCompany = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT DISTINCT company_name, year_est FROM project.productionCompany ORDER BY company_name', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

// SpiderMan Queries
const getMoviesSpiderMan = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT * FROM project.movie WHERE movie_title = \'Spider-Man\'', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

const getActorSpiderMan = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT DISTINCT name, birthday FROM project.person NATURAL JOIN project.starsIn WHERE movie_title = \'Spider-Man\' ORDER BY name', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

const getDirectorsSpiderMan = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT DISTINCT name, birthday FROM project.person NATURAL JOIN project.directs WHERE movie_title = \'Spider-Man\' ORDER BY name', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

const getproducctionCompanySpiderMan = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT DISTINCT company_name, year_est FROM project.productionCompany NATURAL JOIN  project.produces WHERE movie_title = \'Spider-Man\' ORDER BY company_name', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

// SpiderMan2 Queries
const getMoviesSpiderMan2 = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT * FROM project.movie WHERE movie_title = \'Spider-Man 2\'', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

const getActorSpiderMan2 = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT DISTINCT name, birthday FROM project.person NATURAL JOIN project.starsIn WHERE movie_title = \'Spider-Man 2\' ORDER BY name', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

const getDirectorsSpiderMan2 = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT DISTINCT name, birthday FROM project.person NATURAL JOIN project.directs WHERE movie_title = \'Spider-Man 2\' ORDER BY name', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

const getproducctionCompanySpiderMan2 = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT DISTINCT company_name, year_est FROM project.productionCompany NATURAL JOIN  project.produces WHERE movie_title = \'Spider-Man 2\' ORDER BY company_name', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

// SpiderMan3 Queries
const getMoviesSpiderMan3 = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT * FROM project.movie WHERE movie_title = \'Spider-Man 3\'', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

const getActorSpiderMan3 = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT DISTINCT name, birthday FROM project.person NATURAL JOIN project.starsIn WHERE movie_title = \'Spider-Man 3\' ORDER BY name', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

const getDirectorsSpiderMan3 = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT DISTINCT name, birthday FROM project.person NATURAL JOIN project.directs WHERE movie_title = \'Spider-Man 3\' ORDER BY name', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

const getproducctionCompanySpiderMan3 = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT DISTINCT company_name, year_est FROM project.productionCompany NATURAL JOIN  project.produces WHERE movie_title = \'Spider-Man 3\' ORDER BY company_name', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

//SpiderManTrilogy
const getMoviesSpiderManTrilogy = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT AVG(rt_rating), AVG(imdb_rating), SUM(budget), SUM(boxoffice) FROM project.movie WHERE movie_title = \'Spider-Man\' OR movie_title = \'Spider-Man 2\' OR movie_title = \'Spider-Man 3\'', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

const getActorSpiderManTrilogy = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT DISTINCT name, birthday FROM project.person NATURAL JOIN project.starsIn WHERE movie_title = \'Spider-Man\' OR movie_title = \'Spider-Man 2\' OR movie_title = \'Spider-Man 3\' ORDER BY name', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

const getDirectorsSpiderManTrilogy = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT DISTINCT name, birthday FROM project.person NATURAL JOIN project.directs WHERE movie_title = \'Spider-Man\' OR movie_title = \'Spider-Man 2\' OR movie_title = \'Spider-Man 3\' ORDER BY name', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

const getproducctionCompanySpiderManTrilogy = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT DISTINCT company_name, year_est FROM project.productionCompany NATURAL JOIN  project.produces WHERE movie_title = \'Spider-Man\' OR movie_title = \'Spider-Man 2\' OR movie_title = \'Spider-Man 3\' ORDER BY company_name', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

// Export the database connection and CRUD functions
module.exports = {
	server,
	//getClasses,
  getMovies,
  getActor,
  getDirectors,
  getproducctionCompany,

  //SpiderMan
  getMoviesSpiderMan,
  getActorSpiderMan,
  getDirectorsSpiderMan,
  getproducctionCompanySpiderMan,

  //SpiderMan2
  getMoviesSpiderMan2,
  getActorSpiderMan2,
  getDirectorsSpiderMan2,
  getproducctionCompanySpiderMan2,

  //SpiderMan3
  getMoviesSpiderMan3,
  getActorSpiderMan3,
  getDirectorsSpiderMan3,
  getproducctionCompanySpiderMan3,

  //SpiderManTrilogy
  getMoviesSpiderManTrilogy,
  getActorSpiderManTrilogy,
  getDirectorsSpiderManTrilogy,
  getproducctionCompanySpiderManTrilogy


};
