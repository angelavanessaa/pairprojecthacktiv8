const express = require('express');
const app = express();
const PORT = 3000;
const UserController = require('./controllers/UserController');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => { res.render('app'); })
app.get('/register', UserController.register);
app.post('/register', UserController.create);

app.listen(PORT);