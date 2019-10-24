const Transaction = require('../models').Transaction;
const Movie = require('../models').Movie;
let id = 0

class TransactionController {
    static index(req, res) {
        let movieData;
        let seatMap;
        let unavailableSeats = [];
        let user;
        if(!req.session.user){
            res.render('user/login', {err: "Login terlebih dahulu", user})
        }
        user = req.session.user;
        Movie
            .findByPk(req.params.id)
            .then (movie => {
                movieData = movie;
                seatMap = TransactionController.generateSeatMap(movie);
                return Transaction.findAll({
                    where : {
                        MovieId : req.params.id
                    }
                })
            })
            .then (tickets => {
                for (let i = 0; i < tickets.length; i++) {
                    unavailableSeats.push(tickets[i].dataValues.seatNumber)
                }
                res.render('movie/bookMovie', { movieData, seatMap, unavailableSeats, user})
            })
    }

    static generateBookingCode() {
        return Math.round(Math.random() * 100000);
    }

    static create(req, res) {
        let user = req.session.user
        let data = [];
        let code = TransactionController.generateBookingCode();
        for (let i = 0; i < req.body.orders.length; i++) {
            let seat = req.body.orders[i];
            let newObj = {
                MovieId : req.body.movieData.id,
                UserId : user.id,
                booking_code: code,
                seatNumber : seat
            };
            data.push(newObj)
        }

        Transaction.bulkCreate(data)
            .then( () => {
                res.send({ redirect: `http://localhost:3000/u/1/${code}` })
            })
    }
 
    static showBooking(req, res) {
        let ticketData = []
        let id = 0
        Transaction.findAll({
            where : {
                UserId : req.params.userId,
                booking_code : req.params.bookingCode
            }
        })
        .then (data => {
            ticketData = data
            return Movie.findByPk(data[0].MovieId)
        })
        .then(movie=>{
            res.render('movie/ticket', {ticket: ticketData, movie: movie.name, cnumber: movie.cinemaNumber})
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

module.exports = TransactionController;