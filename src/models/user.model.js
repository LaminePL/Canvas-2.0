var dbConn = require('../../config/db.config');


var User = function(user) {
    this.id_userType = user.id_userType;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.is_admin = user.is_admin ? user.is_admin: 0;
}


//get all users
User.getAllUsers = (data)=> {
    dbConn.query("SELECT * FROM user", (err, res)=>{
        if(err){
            console.log('Error fetching users :', err);
            data(null,err); 
        }else{
            console.log('Users fetched successfully');
            data(null,res);
        }

    })
}

//get user by ID
User.getUserByID = (id_user, data)=>{
    dbConn.query("SELECT * FROM user WHERE id_user=?", id_user, (err, res)=>{
        if(err){
            console.log('Error fetching user with id', err);
            data(null, err);
        }else{
            data(null, res);
        }
    })
}

//create new user
User.createUser = (userReqData, result)=>{
    dbConn.query("INSERT INTO user SET ?", userReqData, (err, res)=>{
        if(err){
            console.log('Error inserting data');
            result(null, err);
        }else{
            console.log('User created successfully');
            result(null, res)
        }
    })

}

module.exports = User;