
const UserModel = require('../models/user.model');


//get users list
exports.getUserList = (req,res)=>{
    console.log("List of Users:")
    UserModel.getAllUsers((err, users) => {
        console.log("Users")
        if(err)
        res.send(err);
        console.log('Users: ', users);
        res.send(users);
    });
}

//get user by id
exports.getUserByID = (req, res)=>{
    console.log('Get user by ID ');
    UserModel.getUserByID(req.params.id_user, (err, user)=>{
        if(err)
        res.send(err);
        console.log('User', user);
        res.send(user);
    })
}