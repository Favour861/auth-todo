const User = require('../models/user.model');

exports.users = (req, res) => {
    User.find(req.params.id, (err, users) => {
        if(err) return next(err);
        res.send(users);
    })
}

exports.signup = (req, res) => {
    // console.log(req);
    console.log(req.body);
    let response;
    User.findOne({email: req.body.email}, (err, result)=>{
        console.log(result);
        if(!err){
            if(result){
                response = {success: false, message: "Email already exist"}
            }else{
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
                })
                response = {success: true, message: "Signed up Successfully"}
            }
        }else{
            response = {success: false, message: "Something went wrong"}
        }
        res.send(response)
    })
}

exports.userDetail = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if(err) return next(err);
        res.send(user);
    })
}

exports.updateUser = (req, res) => {
    try{
        console.log(req.params.id);
        User.findOneAndUpdate(req.params.id, {$set: req.body}, (err, user) => {
            if(err) return next(err);

        let response = {success: true, message: "Updated User Successfully"}
        res.send(response);
        })
    }catch(err){
        res.send(`Can't update User: ${err}`)
    }
}

exports.deleteUser = (req,res) => {
    User.findByIdAndRemove(req.params.id, (err) => {
        if(err) return next(err);

        let response = {success: true, message: "Deleted User Successfully"}
        res.send(response);
    })
}

exports.deleteAll = (req,res) => {
    User.deleteMany({}, (err) => {
        if(err) return next(err);

        let response = {success: true, message: "Deleted Users Successfully"}
        res.send(response);
    })
}

exports.login = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let response;
    User.find({$or: [{email: username, password: password}, {username: username, password: password}]}, (err, result) => {
        if(result.length == 0){
            response = {success: false, message: "Invalid Credentials"}
        }else{
            response = {success: true, message: "Logged In"}
        }
        res.send(response)
    })
}