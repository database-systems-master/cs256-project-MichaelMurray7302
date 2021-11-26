const path = require('path')
const cors = require('cors')
// Use CORS for security
const express = require('express')
const bodyParser = require('body-parser')
const db  = require('./db')


const app = express();
const port = 3000;

// Use CORS for security
app.use(cors())
// Set up where to find the static frontend elements (html, css, js, images, files, etc.)
app.use(express.static(path.join(__dirname, '')));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// function for HTML get request
app.get('/', (request, response) => {

  response.json({ info: 'CS256 Murray-Shay 2021 Project' });
});

// Set API Endpoints
// Default get response for http://localhost:3000/
app.get('/', (request, response) => {
response.sendfile('index.html');
});
app.get('/project.movie' ,db.getMovies);
app.get('/project.starsIn' ,db.getActor);
app.get('/project.directs' ,db.getDirectors);
app.get('/project.productionCompany' ,db.getproducctionCompany)
//app.get('/project.movie/:movie_title', db.getClassesById);
// app.get('/classes/sem/:semester', db.getClassesBySemester);
// app.post('/classes', db.addClass);
// app.put('/classes/:id', db.updateClass);
// app.delete('/classes/:id', db.deleteClass);


// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening');
});
