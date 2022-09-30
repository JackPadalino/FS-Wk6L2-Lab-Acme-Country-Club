const express = require('express');
//const methodOverride = require('method-override');
const app = express();
//const homeRouter = require('./routes/home');

app.use(express.urlencoded({ extended: false }));
//app.use(express.static(__dirname + '/public'));
//app.use(methodOverride('_method'));
//app.use('/',homeRouter);

const {
    Facility,Member,Booking
} = require('./db');

/* 
GET /api/facilities - returns all facilities with their respective bookings
GET /api/bookings - returns all bookings and the member who made each the booking
GET /api/members - returns all members with their sponsor and any members they have sponsored. 
*/

// get all facilities route
app.get('/facilities',async(req,res,next)=>{
    try{
        const facilities = await Facility.findAll({
            include:Booking
        });
        res.send(facilities);
    }catch(error){
        next('You broke something!')
    }
});

// get all bookings route
app.get('/bookings',async(req,res,next)=>{
    try{
        const bookings = await Booking.findAll({
            include:Member
        });
        res.send(bookings);
    }catch(error){
        next('Oops! You broke something...again!')
    }
});

// get all members route
app.get('/members',async(req,res,next)=>{
    try{
        const members = await Member.findAll({
            include:[{ model: Member, as: 'sponsor' },{ model: Member, as: 'sponsees' }]
            //include:Member.sponsorId
        });
        res.send(members);
    }catch(error){
        next('Oops! You broke something...again!')
    }
});

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Connected to port ${PORT}...`);
});