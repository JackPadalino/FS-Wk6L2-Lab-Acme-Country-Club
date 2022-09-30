const Sequelize = require("sequelize");
const db = require("./db");

const Facility = db.define('facility',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    } 
});

module.exports = Facility;