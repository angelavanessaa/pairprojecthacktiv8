const express = require('express');
const app = express();
const PORT = 3000;
const UserController = require('./controllers/UserController');
const MovieController = require('./controllers/MovieController')
// const CinemaController = require("./controllers/CinemaController")
const TransactionController = require('./controllers/TransactionController')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get('/', MovieController.homepage)
app.get('/register', UserController.register);
app.post('/register', UserController.create);
app.get('/login', UserController.login)

// === Movie === //
app.get('/movies', MovieController.show)
app.get('/movies/add', MovieController.addForm)
app.post('/movies/add', MovieController.add)
//Movie detail:
app.get('/movies/:id', MovieController.movieDetail)
app.get('/movies/:id/book', TransactionController.index)
app.post('/movies/:id/book', TransactionController.create)
app.get('/u/:userId/:bookingCode', TransactionController.showBooking)
// === = = === //

// // === Cinema === //
// app.get('/cinema/add', CinemaController.addForm)
// app.post('/cinema/add', CinemaController.add)
// // === = = === //

app.listen(PORT);