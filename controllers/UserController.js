const User = require('../models').User;
const bcrypt = require('../helpers/bcrypt');

class UserController {
    static register(req, res) {
        let user = null;
        res.render('user/register', {user});
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
        let user = null;
        res.render('./user/login', {user})
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
                    let hour = 3600000;
                    req.session.cookie.expires = new Date(Date.now() + hour);
                    res.redirect('/')
                } else {
                    res.send('wrong password')
                }
            })
        
        
    }

    static logout(req, res) {
        req.session.destroy();
        res.redirect('/');
    }
}

module.exports = UserController;