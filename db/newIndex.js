const Sequelize = require('sequelize'); // importing Sequelize ORM
const db = new Sequelize('postgres://localhost:5432/acme_cc'); // URL path to our db

const Member = db.define('member',{
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

const Booking = db.define('booking',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    }
});

Member.hasMany(Member, {
    as: 'sponsees'
});
Member.belongsTo(Member,{
    as:'sponsor',
    foreignKey:'sponsorId'
});

Member.hasMany(Booking);
Booking.belongsTo(Member);

Facility.hasMany(Booking);
Booking.belongsTo(Facility);

module.exports = {
    db,
    Member,
    Facility,
    Booking
};