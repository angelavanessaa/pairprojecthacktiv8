const CinemaMovie = require('../models').CinemaMovie;

class CinemaMovieController {
    static index(req, res) {
        res.render('movie/bookMovie')
    }

    static create(req, res) {
        res.send(req.body)
    }
}

module.exports = CinemaMovieController;