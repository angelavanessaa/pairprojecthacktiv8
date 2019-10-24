const User = require('../models').User;
const bcrypt = require('../helpers/bcrypt');

class UserController {
    static register(req, res) {
        res.render('user/register');
    }

    static create(req, res) {
        User
            .create(req.body)
            .then( user => {
                res.redirect('/');
            })
            .catch( err => {
                res.send(err);
            });
    }
    static login(req, res){
        res.render('./user/login')
    }

    static attemptLogin(req, res) {
        User
            .findOne({
                where : {
                    email : req.body.email
                }
            })
            .then( data => {
                if (bcrypt.compare(req.body.password, data.password)) {
                    req.session.user = {
                        id : data.id,
                        name : data.fullname,
                        email : data.email,
                        isAdmin : data.isAdmin
                    }
                    res.redirect('/')
                } else {
                    res.send('wrong password')
                }
            })
        
        
    }
}

module.exports = UserController;