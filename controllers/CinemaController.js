const Cinema = require('../models').Cinema

class Controller {
    static addForm(req, res){
        res.render('./cinema/add')
    }
    static add(req, res){
        Cinema.create(req.body)
            .then(succed=>{
                res.redirect('/')
            }).catch(err=>{
                res.render('./cinema/add', {msg: err})
            })
    }
}
module.exports = Controller