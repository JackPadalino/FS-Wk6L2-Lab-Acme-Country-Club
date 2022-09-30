const Sequelize = require("sequelize");
const db = require("./db");

const Booking = db.define('booking',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    }
});

module.exports = Booking;