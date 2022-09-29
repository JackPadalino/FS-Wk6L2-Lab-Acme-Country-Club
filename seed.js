const {
    db,Member,Facility,Booking
} = require('./db/newIndex');

const seedDB=async()=>{
    // clearing the DB before seeding
    await db.sync({force:true,logging:false});

    //member instances
    const lucy = await Member.create({
        name:'lucy'
    });
    const moe = await Member.create({
        name:'moe',
        sponsorId:lucy.id
    });
    const ethyl = await Member.create({
        name:'ethyl',
        sponsorId:moe.id
    });
    const larry = await Member.create({
        name:'larry',
        sponsorId:lucy.id
    });

    // facility instances
    const tennis = await Facility.create({
        name:'tennis'
    });
    const ping_pong = await Facility.create({
        name:'ping pong'
    });
    const marbles = await Facility.create({
        name:'marbles'
    });

    // booking instances
    await Booking.create({
       memberId:lucy.id,
       facilityId:marbles.id
    });
    await Booking.create({
       memberId:lucy.id,
       facilityId:marbles.id
    });
    await Booking.create({
        memberId:moe.id,
        facilityId:tennis.id
    });
};

seedDB();

/*
members
moe, lucy, ethyl, and larry
lucy sponsored moe and larry
moe sponsored ethyl

facilities
tennis
ping pong
marbles

bookings
lucy has booked marbles twice
moe has booked tennis
ping pong has not been booked
*/
