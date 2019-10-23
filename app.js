const express = require('express');
const app = express();
const PORT = 3000;
const UserController = require('./controllers/UserController');
const MovieController = require('./controllers/MovieController')
const CinemaController = require("./controllers/CinemaController")
const CinemaMovieController = require('./controllers/CinemaMovieController')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get('/', MovieController.homepage)
// app.get('/', (req, res) => { res.render('app'); })
app.get('/register', UserController.register);
app.post('/register', UserController.create);

// === Movie === //
app.get('/movies', MovieController.show)
app.get('/movies/add', MovieController.addForm)
app.post('/movies/add', MovieController.add)
//Movie detail:
app.get('/movies/:id', MovieController.movieDetail)
app.get('/movies/:id/book', CinemaMovieController.index)
app.post('/movies/:id/book', CinemaMovieController.create)
// === = = === //

// === Cinema === //
app.get('/cinema/add', CinemaController.addForm)
app.post('/cinema/add', CinemaController.add)
// === = = === //

app.listen(PORT);