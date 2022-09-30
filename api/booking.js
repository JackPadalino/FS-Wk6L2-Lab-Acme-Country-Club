const express = require('express');
const router = express.Router();

const {
    Member,Booking,Facility
} = require('../db');

//GET /api/bookings - returns all bookings and the member who made each the booking
router.get('/bookings',async(req,res,next)=>{
    try{
        const bookings = await Booking.findAll({
            include:Member
        });
        res.send(bookings);
    }catch(error){
        next('Oops! You broke something...again!');
    }
});

module.exports  = router;