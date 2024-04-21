

//import users.json file and fs module
const { json } = require('express')
const users = require('./users.json')
const fs = require('fs')

//This method will findUser
function findUser(email,done){
    //use filter method to find the user from json file 
    const userFetched = users.filter((user) => user.email === email)[0]
    console.log("return user data")
    return done(undefined, userFetched)
}

//This method will register user
function registerUser(userData,done){
   
    //call fileWrite method and write the user in json file
    users.push(userData)
    fs.writeFileSync('./Users/Users.json', JSON.stringify(users))
    return done(undefined, userData)
}

module.exports = {
    findUser,registerUser
}