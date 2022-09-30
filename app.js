const express = require('express');
//const methodOverride = require('method-override');
const app = express();
const bookingRouter = require('./api/booking');
const facilityRouter = require('./api/facility');
const memberRouter = require('./api/member');

app.use(express.urlencoded({ extended: false }));
//app.use(express.static(__dirname + '/public'));
//app.use(methodOverride('_method'));
app.use('/bookings',bookingRouter);
app.use('/facilities',facilityRouter);
app.use('/members',memberRouter);

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Connected to port ${PORT}...`);
});