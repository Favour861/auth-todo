const User = require('../models/user.model');

exports.users = (req,res) => {
    res.send({users: ["Favour","Malo","Toy"]})
}

exports.signup = (req, res) => {
    let new_user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
        password: req.body.password
    })

    new_user.save((err)=>{
        if(err){
            return next(err)
        }
        res.send('Signing Up successful')
    })
}