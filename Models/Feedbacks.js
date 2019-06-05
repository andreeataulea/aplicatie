const Sequelize = require("sequelize");
const db = require("../database/database");

module.exports = db.sequelize.define('feedbacks',
    
    {
        idFeedback:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idTask: {
            type: Sequelize.STRING
        },
        feedback: {
            type: Sequelize.STRING
        },
        
    },{
        timestamps:false
    }
   
)