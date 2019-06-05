// import path from 'path';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var Users = require('./Routes/Users');
app.use('/users',Users);

var Feedbacks = require('./Routes/Feedbacks');
app.use('/feedbacks',Feedbacks);

var Questions = require('./Routes/Questions');
app.use('/questions',Questions);

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user:'andreeataulea',
//     password:'',
//     database:'internships',
    
// });

// connection.connect(function(err){
//     if(err){
//         throw err;
//     }else{
//         console.log("Connected");
//     }
// });


// const createFeedbacks= 'create table if not exists feedbacks (idTask integer NOT NULL, lastName varchar(50) NOT NULL, email varchar(50) PRIMARY KEY, bachelor varchar(50), password varchar(50) NOT NULL, isAdmin boolean)';

// connection.query(createUsers, function(err,result){
//     if(err){
//         throw err;
//     }else{
//         console.log("Table USERS created");
//     }
// });

// app.get('/getUsers',(req,res)=>{
//     connection.query("SELECT * FROM Users",(err,rows,fields)=>{
//         if(!err){
//             res.send(rows);
//         }else{
//             console.log(err);
//         }
//     })
// });
// app.post('/api/auth',(req,res)=>{
//     res.status(400).json({errors:{global:"Invalid credentials"}});
// });
// app.get("/*",(req,res)=>{
//     res.sendFile(path.join(__dirname, "index.html"));
// });


app.listen(8080,()=>{
    console.log('Listen on 8080...');
});

