const Sequelize = require("sequelize");
const db = require("../database/database");

module.exports = db.sequelize.define('questions',
    
    {
        idQuestion: {
            type: Sequelize.INTEGER,
            primaryKey:true
        },
        idTask: {
            type: Sequelize.STRING
        },
        qestionText: {
            type: Sequelize.STRING,
        },

        correctAnswer:{
            type: Sequelize.INTEGER,
        },
    },{
        timestamps:false
    }
   
)