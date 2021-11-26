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

// // Get classes by ID
// const getClassesById = (request, response) => {
// 	server.then((conn) => {
//   	const id = request.params.id;
//
//   	conn.query('SELECT * FROM classes WHERE id = $1', [id], (error, results) => {
// 	    if (error) {
// 	      throw error;
// 	    }
// 	    response.status(200).json(results.rows);
//   	});
// 	});
// };
//
// // Get classes by semester
// const getClassesBySemester = (request, response) => {
// 	server.then((conn) => {
//     const semester = request.params.semester;
//
//   	conn.query('SELECT * FROM classes WHERE semester = $1', [semester], (error, results) => {
// 	    if (error) {
// 	      throw error;
// 	    }
// 	    response.status(200).json(results.rows);
//
//     // Write a query to show all classes for a specified semester
//
// 	   });
//   });
// };
//
// // Add a new class
// const addClass = (request, response) => {
// 	server.then((conn) => {
//   	const { id, title, semester, year, credits } = request.body;
//
// 	conn.query('INSERT INTO classes VALUES ($1, $2, $3, $4, $5)', [id, title, semester, year, credits], (error, results) => {
//     if(error) {
//       console.log(`Printing error: ${error}`);
//       if(error.code == '23505'){
//       response.status(500).send(`Class ${id} already exists.`);
//       }
//     }
// 	    response.status(200).send(`Class added with ID: ${id}`);
//   	});
// 	});
// };
//
// // Update a class
// const updateClass = (request, response) => {
// 	server.then((conn) => {
//     const id = request.params.id;
//     const { title, semester, year, credits} = request.body;
//     console.log(request.body);
//
//     conn.query("UPDATE classes SET title = $1, semester = $2, year = $3, credits = $4 WHERE id = $5", [title, semester, year, credits, id], (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`Class Updated with Credits: ${id}`);
//
//     // Add a query to update a class based on it id
//     	});
// 	});
// };
//
// // Delete a class
// const deleteClass = (request, response) => {
// 	server.then((conn) => {
//     const id = request.params.id;
//
//     conn.query("DELETE FROM classes WHERE id = $1", [id], (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`Class deleted based on ID: ${id}`);
//
//     // Add a query to delete a particular class given an id
//     });
// 	});
// };

// Export the database connection and CRUD functions
module.exports = {
	server,
	//getClasses,
  getMovies,
  getActor,
  getDirectors,
  getproducctionCompany
	// getClassesById,
	// getClassesBySemester,
	// addClass,
	// updateClass,
	// deleteClass
};
