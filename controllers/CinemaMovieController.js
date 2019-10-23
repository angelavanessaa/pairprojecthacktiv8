const CinemaMovie = require('../models').CinemaMovie;
const Movie = require('../models').Movie;

class CinemaMovieController {
    static index(req, res) {
        Movie.findOne(req.param.id)
            .then( movie => {
                let seatMap = CinemaMovieController.generateSeatMap(movie.dataValues);
                res.render('movie/bookMovie', { movie, seatMap })
            })
            .catch( err => {
                res.send(err);
            })
    }

    static create(req, res) {
        for (let i = 0; i < req.body.orders.length; i++) {
            let order = req.body.orders[i];
            CinemaMovie.create({
                CinemaId : 1,
                MovieId : req.body.movieData.id,
                UserId : 1,
                booking_code: 'asdasda',
                seatNumber : order
            })
        }
        // console.log(req.body)
        res.send({ redirect: 'http://localhost:3000/' })
    }

    static generateSeatMap(movie){
        let map = [];
        let num = movie.maxtickets;
        let str = '';

        for (let i = 0; i < num; i++) {
            if (i % 5 == 0 && i != 0 && i % 10 != 0) {
                str += '_'
            }

            if (i % 10 == 0 && i != 0) {
                map.push(str);
                str = 'e';
            } else {
                str += 'e';
            }
        }

        let lastrow = 'eeeeeeeeeee';
        map[map.length - 1] = lastrow;
        return map;
    }
}

module.exports = CinemaMovieController;