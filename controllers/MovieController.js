const Movie = require('../models').Movie;
const Cinema = require('../models').Cinema;
let params = 0

class Controller {
    static homepage(req, res){
        Movie.findAll()
            .then(movies=>{
                let user = req.session.user
                res.render('app', {movie: movies, user}) 
            })
    }
    static movieDetail(req, res){
        Movie.findByPk(req.params.id, {include : Cinema})
            .then(detail=>{
                let user = req.session.user
                res.render('./movie/movieDetails', {detail, user})
            })
    }
    static show(req, res){
        Movie.findAll()
            .then(movies=>{
                let user = req.session.user
                res.render('./movie/showMovies', {movie: movies, user})
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
    static edit(req, res){
        let user = req.session.user
        params = req.params.id
        Movie.findByPk(req.params.id)
            .then(movie=>{
                // res.send(movie)
                res.render('./movie/movieedit', {detail: movie, user})
            })
    }
    static editpost(req, res){
        Movie.update(req.body, {where: {id: temp}})
            .then(succed=>{
                res.redirect('/movies/')
            })
    }
}
module.exports = Controller