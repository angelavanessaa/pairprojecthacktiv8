const express = require('express');
const app = express();
const PORT = 3000;
const UserController = require('./controllers/UserController');
const MovieController = require('./controllers/MovieController');
const TransactionController = require('./controllers/TransactionController');
const session = require('express-session');

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get('/register', UserController.register);
app.post('/register', UserController.create);
app.get('/login', UserController.login)
app.post('/login', UserController.attemptLogin)
app.get('/logout', UserController.logout)
app.get('/', MovieController.homepage)

// === Movie === //
app.get('/movies', MovieController.show)
app.get('/movies/add', MovieController.addForm)
app.post('/movies/add', MovieController.add)
app.get('/movies/:id/edit', MovieController.edit)
app.post('/movies/:id/edit', MovieController.editpost)
app.get('/movies/:id', MovieController.movieDetail)
app.get('/movies/:id/book', TransactionController.index)
app.post('/movies/:id/book', TransactionController.create)
app.get('/u/:userId/:bookingCode', TransactionController.showBooking)
// === = = === //

app.listen(PORT);