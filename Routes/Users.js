const express = require("express");
const users = express.Router();
const cors = require('cors');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const User = require("../Models/Users");
users.use(cors());

process.env.SECRET_KEY = "secret";

users.post('/register',(req,res)=>{
    const userData = {
        first_name: req.body.data.first_name,
        last_name: req.body.data.last_name,
        email: req.body.data.email,
        bachelor: req.body.data.bachelor,
        password: req.body.data.password,
        isAdmin:req.body.data.isAdmin
    }

    User.findOne({
        where:{
            email: req.body.data.email
        }
    }).then(user=>{
        if(!user){
            bcrypt.hash(req.body.data.password,10,(err,hash)=>{
                userData.password = hash;
                User.create(userData)
                .then(user=>{
                    // res.json({status: user.email + 'registered'})
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send({token: token,user: user.dataValues})
                })
                .catch(err=>{
                    res.send('error: ' + err);
                })
            })
        }else{
            res.json({error:"User already exists"})
        }
    })
    .catch(err=>{
        res.send('error: ' + err)
    })

})

users.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.credentials.email
        }
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.credentials.password, user.password)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send({token: token,user: user.dataValues})
                }
            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

module.exports = users