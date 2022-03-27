

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


//create user
exports.createNewUser = (req, res)=>{
    console.log('req data', req.body);
    const userReqData = new UserModel(req.body);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Please fill all fields'});

    }else{
        console.log('Valid data');
        UserModel.createUser(userReqData, (err, user)=>{
            if(err)
            res.send(err);
            res.json({status: true, message : 'User added successfully', data: user});
        })

    }
}