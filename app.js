const express = require('express');
const app = express();
const PORT = 3000;
const UserController = require('./controllers/UserController');
const MovieController = require('./controllers/MovieController')
const CinemaController = require("./controllers/CinemaController")

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => { res.render('app'); })
app.get('/register', UserController.register);
app.post('/register', UserController.create);

// === Movie === //
app.get('/movie', MovieController.show)
app.get('/movie/add', MovieController.addForm)
app.post('/movie/add', MovieController.add)
// === = = === //

// === Cinema === //
app.get('/cinema/add', CinemaController.addForm)
app.post('/cinema/add', CinemaController.add)
// === = = === //

app.listen(PORT);