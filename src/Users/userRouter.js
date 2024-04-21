

//import the required module
const express = require('express')
const { route } = require('../aunthentication')
const router = express.Router()

const userController = require('./userController')
//This get method will get the user with token
router.get('/',(req,res)=>{
        try {
                const userdata = req.claims
                console.log(JSON.stringify(userdata));
                if (!userdata.email) {
                        return res.send(400).send('user email not available')
                }
                         console.log("find user")
                userController.findUser(userdata.email, (err, result) => {
                         console.log("checking")
                       
                        if (err) {
                                console.log("error")

                                return res.status(400).send(err)
                        }
                        else
                        {
                                console.log("logged in")
                                return res.status(200).send({STATUS: "OK", data: result })
                        }
                })
        }
        catch (err) {
                return res.status(401).send(err)
        }
})


module.exports = router