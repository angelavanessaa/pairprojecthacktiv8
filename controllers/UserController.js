const User = require('../models').User;

class UserController {
    static register(req, res) {
        res.render('user/register');
    }

    static create(req, res) {
        User
            .create(req.body)
            .then( user => {
                res.send(user);
            })
            .catch( err => {
                res.send(err);
            });
    }
    static login(req, res){
        res.render('./user/login')
    }
}

module.exports = UserController;