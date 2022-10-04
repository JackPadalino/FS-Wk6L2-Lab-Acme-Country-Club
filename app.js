const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
const apiRouter = require('./api');
app.use('/api',apiRouter);

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Connected to port ${PORT}...`);
});