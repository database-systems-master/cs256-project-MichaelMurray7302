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

//Project
app.get('/project.movie' ,db.getMovies);
app.get('/project.starsIn' ,db.getActor);
app.get('/project.directs' ,db.getDirectors);
app.get('/project.productionCompany' ,db.getproducctionCompany);
app.get('/project.writes' ,db.getWriters)

//SpiderMan
app.get('/project.movie/SpiderMan' ,db.getMoviesSpiderMan);
app.get('/project.starsIn/SpiderMan' ,db.getActorSpiderMan);
app.get('/project.directs/SpiderMan' ,db.getDirectorsSpiderMan);
app.get('/project.productionCompany/SpiderMan' ,db.getproducctionCompanySpiderMan);
app.get('/project.writes/SpiderMan' ,db.getWritersSpiderMan)

//SpiderMan 2
app.get('/project.movie/SpiderMan2' ,db.getMoviesSpiderMan2);
app.get('/project.starsIn/SpiderMan2' ,db.getActorSpiderMan2);
app.get('/project.directs/SpiderMan2' ,db.getDirectorsSpiderMan2);
app.get('/project.productionCompany/SpiderMan2' ,db.getproducctionCompanySpiderMan2);
app.get('/project.writes/SpiderMan2' ,db.getWritersSpiderMan2)

//SpiderMan 3
app.get('/project.movie/SpiderMan3' ,db.getMoviesSpiderMan3);
app.get('/project.starsIn/SpiderMan3' ,db.getActorSpiderMan3);
app.get('/project.directs/SpiderMan3' ,db.getDirectorsSpiderMan3);
app.get('/project.productionCompany/SpiderMan3' ,db.getproducctionCompanySpiderMan3);
app.get('/project.writes/SpiderMan3' ,db.getWritersSpiderMan3)

//SpiderManTrilogy
app.get('/project.movie/SpiderManTrilogy' ,db.getMoviesSpiderManTrilogy);
app.get('/project.starsIn/SpiderManTrilogy' ,db.getActorSpiderManTrilogy);
app.get('/project.directs/SpiderManTrilogy' ,db.getDirectorsSpiderManTrilogy);
app.get('/project.productionCompany/SpiderManTrilogy' ,db.getproducctionCompanySpiderManTrilogy);
app.get('/project.writes/SpiderManTrilogy' ,db.getWritersSpiderManTrilogy)

//Brothers
app.get('/project.movie/Brothers' ,db.getMoviesBrothers);
app.get('/project.starsIn/Brothers' ,db.getActorBrothers);
app.get('/project.directs/Brothers' ,db.getDirectorsBrothers);
app.get('/project.productionCompany/Brothers' ,db.getproducctionCompanyBrothers);
app.get('/project.writes/Brothers' ,db.getWritersBrothers)

//Jumper
app.get('/project.movie/Jumper' ,db.getMoviesJumper);
app.get('/project.starsIn/Jumper' ,db.getActorJumper);
app.get('/project.directs/Jumper' ,db.getDirectorsJumper);
app.get('/project.productionCompany/Jumper' ,db.getproducctionCompanyJumper);
app.get('/project.writes/Jumper' ,db.getWritersJumper)

//TheLighthouse
app.get('/project.movie/TheLighthouse' ,db.getMoviesTheLighthouse);
app.get('/project.starsIn/TheLighthouse' ,db.getActorTheLighthouse);
app.get('/project.directs/TheLighthouse' ,db.getDirectorsTheLighthouse);
app.get('/project.productionCompany/TheLighthouse' ,db.getproducctionCompanyTheLighthouse);
app.get('/project.writes/TheLighthouse' ,db.getWritersTheLighthouse)

//Starwars 1
app.get('/project.movie/I' ,db.getMoviesI);
app.get('/project.starsIn/I' ,db.getActorI);
app.get('/project.directs/I' ,db.getDirectorsI);
app.get('/project.productionCompany/I' ,db.getproducctionCompanyI);
app.get('/project.writes/I' ,db.getWritersI)

//Starwars 2
app.get('/project.movie/II' ,db.getMoviesII);
app.get('/project.starsIn/II' ,db.getActorII);
app.get('/project.directs/II' ,db.getDirectorsII);
app.get('/project.productionCompany/II' ,db.getproducctionCompanyII);
app.get('/project.writes/II' ,db.getWritersII)

//Starwars 3
app.get('/project.movie/III' ,db.getMoviesIII);
app.get('/project.starsIn/III' ,db.getActorIII);
app.get('/project.directs/III' ,db.getDirectorsIII);
app.get('/project.productionCompany/III' ,db.getproducctionCompanyIII);
app.get('/project.writes/III' ,db.getWritersIII)

//Starwars: prequels
app.get('/project.movie/Prequels' ,db.getMoviesPrequels);
app.get('/project.starsIn/Prequels' ,db.getActorPrequels);
app.get('/project.directs/Prequels' ,db.getDirectorsPrequels);
app.get('/project.productionCompany/Prequels' ,db.getproducctionCompanyPrequels);
app.get('/project.writes/Prequels' ,db.getWritersPrequels)

//SJ Queries
app.get('/project.movie/SJ' ,db.getMoviesSJ);
app.get('/project.starsIn/SJ' ,db.getActorSJ);
app.get('/project.directs/SJ' ,db.getDirectorsSJ);
app.get('/project.productionCompany/SJ' ,db.getproducctionCompanySJ);
app.get('/project.writes/SJ' ,db.getWritersSJ)

//Fifty Queries
app.get('/project.movie/fifty' ,db.getMoviesfifty);
app.get('/project.starsIn/fifty' ,db.getActorfifty);
app.get('/project.directs/fifty' ,db.getDirectorsfifty);
app.get('/project.productionCompany/fifty' ,db.getproducctionCompanyfifty);
app.get('/project.writes/fifty' ,db.getWritersfifty)


//RT Queries
app.get('/project.movie/RT' ,db.getMoviesRT);
app.get('/project.starsIn/RT' ,db.getActorRT);
app.get('/project.directs/RT' ,db.getDirectorsRT);
app.get('/project.productionCompany/RT' ,db.getproducctionCompanyRT);
app.get('/project.writes/RT' ,db.getWritersRT)

//IMDB Queries
app.get('/project.movie/IMDB' ,db.getMoviesimdb);
app.get('/project.starsIn/IMDB' ,db.getActorimdb);
app.get('/project.directs/IMDB' ,db.getDirectorsimdb);
app.get('/project.productionCompany/IMDB' ,db.getproducctionCompanyimdb);
app.get('/project.writes/IMDB' ,db.getWritersimdb)

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening');
});
