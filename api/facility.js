const express = require('express');
const router = express.Router();

const {
    Member,Booking,Facility
} = require('../db');

//GET /api/facilities - returns all facilities with their respective bookings
router.get('/',async(req,res,next)=>{
    try{
        const facilities = await Facility.findAll({
            include:Booking
        });
        res.send(facilities);
    }catch(error){
        next('Oops! You broke something...again!');
    }
});

module.exports  = router;