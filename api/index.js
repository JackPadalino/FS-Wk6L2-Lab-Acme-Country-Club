const express = require('express');
const router = express.Router();

const memberRouter = require('./member');
const bookingRouter = require('./booking');
const facilityRouter = require('./facility');

router.use('/members',memberRouter);
router.use('/bookings',bookingRouter);
router.use('/facilities',facilityRouter);

module.exports = router;