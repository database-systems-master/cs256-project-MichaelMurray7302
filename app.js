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

//SpiderMan
app.get('/project.movie/SpiderMan' ,db.getMoviesSpiderMan);
app.get('/project.starsIn/SpiderMan' ,db.getActorSpiderMan);
app.get('/project.directs/SpiderMan' ,db.getDirectorsSpiderMan);
app.get('/project.productionCompany/SpiderMan' ,db.getproducctionCompanySpiderMan)

//SpiderMan 2
app.get('/project.movie/SpiderMan2' ,db.getMoviesSpiderMan2);
app.get('/project.starsIn/SpiderMan2' ,db.getActorSpiderMan2);
app.get('/project.directs/SpiderMan2' ,db.getDirectorsSpiderMan2);
app.get('/project.productionCompany/SpiderMan2' ,db.getproducctionCompanySpiderMan2)

//SpiderMan 3
app.get('/project.movie/SpiderMan3' ,db.getMoviesSpiderMan3);
app.get('/project.starsIn/SpiderMan3' ,db.getActorSpiderMan3);
app.get('/project.directs/SpiderMan3' ,db.getDirectorsSpiderMan3);
app.get('/project.productionCompany/SpiderMan3' ,db.getproducctionCompanySpiderMan3)

//SpiderManTrilogy
app.get('/project.movie/SpiderManTrilogy' ,db.getMoviesSpiderManTrilogy);
app.get('/project.starsIn/SpiderManTrilogy' ,db.getActorSpiderManTrilogy);
app.get('/project.directs/SpiderManTrilogy' ,db.getDirectorsSpiderManTrilogy);
app.get('/project.productionCompany/SpiderManTrilogy' ,db.getproducctionCompanySpiderManTrilogy)

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening');
});
