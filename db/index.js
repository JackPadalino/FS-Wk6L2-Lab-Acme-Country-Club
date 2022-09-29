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
    },
    sponsorId:{
        type:Sequelize.INTEGER,
        allowNull:true
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
    },
    bookerId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    facilityId:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

/* One-to-many self-referencing relationship between Members.
A member has one other member as a sponsor.
A member can have many other members sponsored by them.*/
Member.hasMany(Member, {
    as: 'id', foreignKey: 'sponsorId', useJunctionTable: false
});
Member.belongsTo(Member);
 
/*One-to-many relationship between Member and Booking.
A booking has one member as the booker.
A member can have many bookings. */
Member.hasMany(Booking);
Booking.belongsTo(Member);

/* One-to-many relationship between Facility and Booking.
A booking has one facility.
A facility can have many bookings.  */
Facility.hasMany(Booking);
Booking.belongsTo(Facility);

/*
module.exports = {
    db,
    Member,
    Facility,
    Booking
};
*/