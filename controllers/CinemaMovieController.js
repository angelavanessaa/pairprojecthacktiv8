const CinemaMovie = require('../models').CinemaMovie;
const Movie = require('../models').Movie;

class CinemaMovieController {
    static index(req, res) {
        Movie.findByPk(req.params.id)
            .then( movie => {
                let seatMap = CinemaMovieController.generateSeatMap(movie);
                res.render('movie/bookMovie', { movie, seatMap })
            })
            .catch( err => {
                res.send(err);
            })
    }

    static create(req, res) {
        let data = [];
        let code = 123123;
        for (let i = 0; i < req.body.orders.length; i++) {
            let seat = req.body.orders[i];
            let newObj = {
                CinemaId : 1,
                MovieId : req.body.movieData.id,
                UserId : 1,
                booking_code: code,
                seatNumber : seat
            };
            data.push(newObj)
        }

        CinemaMovie.bulkCreate(data)
            .then( () => {
                res.send({ redirect: `http://localhost:3000/u/1/${code}` })
            })
    }

    static showBooking(req, res) {
        CinemaMovie.findAll({
            where : {
                UserId : req.params.userId,
                booking_code : req.params.bookingCode
            }
        })
        .then (data => {
            res.render('movie/bookMovieSuccess', {data})
        })
        .catch( err => {
            console.log(err)
        })
    }

    static generateSeatMap(movie){
        let map = [];
        let num = movie.dataValues.maxtickets;
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