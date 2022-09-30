const express = require('express');
const router = express.Router();

const {
    Member
} = require('../db');

//GET /api/members - returns all members with their sponsor and any members they have sponsored.
router.get('/',async(req,res,next)=>{
    try{
        const members = await Member.findAll({
            include:[
                { model: Member, as: 'sponsor' },
                { model: Member, as: 'sponsees' }
            ]
        });
        res.send(members);
    }catch(error){
        next('Oops! You broke something...again!');
    }
});

module.exports  = router;