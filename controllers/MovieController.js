const Movie = require('../models').Movie

class Controller {
    static homepage(req, res){
        Movie.findAll()
            .then(movies=>{
                // res.send(movies)
                res.render('app', {movie: movies}) 
            })
    }
    static movieDetail(req, res){
        Movie.findByPk(req.params.id)
            .then(detail=>{
                res.render('./movie/movieDetails', {detail})
            })
    }
    static show(req, res){
        Movie.findAll()
            .then(movies=>{
                // res.send(movies)
                res.render('./movie/showMovies', {movie: movies})
            })
    }
    static addForm(req, res){
        res.render('./movie/addmovie')
    }
    static add(req, res){
        Movie.create(req.body)
            .then(succed=>{
                res.redirect('/movies')
            })
            .catch(err=>{
                res.render('./movie/addmovie', {msg: err.errors})
            })
    }
    static book(req, res){
        res.send(req.params.id)
    }
}
module.exports = Controller