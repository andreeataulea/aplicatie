const Sequelize = require("sequelize");
const db = require("../database/database");

module.exports = db.sequelize.define('users',
    
    {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            primaryKey: true,

        },

        bachelor:{
            type: Sequelize.STRING,
        },

        password: {
            type: Sequelize.STRING
        },
        isAdmin: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
    },{
        timestamps:false
    }
   
)