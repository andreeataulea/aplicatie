const Sequelize = require('sequelize');

const db={};

const sequelize = new Sequelize('internships','andreeataulea',"",{
    host:'localhost',
    dialect:'mysql'
    
});

// connection.connect(function(err){
//     if(err){
//         throw err;
//     }else{
//         console.log("Connected");
//     }
// });

 db.sequelize = sequelize;
 db.Sequelize = Sequelize;

 //sequelize.sync();


module.exports = db