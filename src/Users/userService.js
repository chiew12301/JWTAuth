

//import dao layer
const usersDao = require('./userDAO')

function findUser(email,done){
    //call the userdao finduser method
    return usersDao.findUser(email, done)
}

function registerUser(userData,done){
    //call the userdao registeruser method
   usersDao.registerUser(userData,done)
}


module.exports={
    findUser, registerUser
}