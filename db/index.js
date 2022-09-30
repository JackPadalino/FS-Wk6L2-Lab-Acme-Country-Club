const Member = require('./member.js');
const Booking = require('./booking.js');
const Facility = require('./facility.js');

//One-to-many self-referencing relationship between Members.
//A member has one other member as a sponsor.
//A member can have many other members sponsored by them.

Member.hasMany(Member, {
    as: 'sponsees',
    foreignKey:'sponsorId'
});
Member.belongsTo(Member,{
    as:'sponsor',
    foreignKey:'sponsorId'
});
 
//One-to-many relationship between Member and Booking.
//A booking has one member as the booker.
//A member can have many bookings.
Member.hasMany(Booking);
Booking.belongsTo(Member);

//One-to-many relationship between Facility and Booking.
//A booking has one facility.
//A facility can have many bookings.  
Facility.hasMany(Booking);
Booking.belongsTo(Facility);

module.exports = {
    Member,
    Booking,
    Facility
};