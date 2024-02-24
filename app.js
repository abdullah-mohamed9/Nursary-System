
// Require the express module
const express = require('express');
const teacherRoute = require('./Route/teacherRoute');
const childRoute = require('./Route/childRoute');
const classRoute = require('./Route/classRoute');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const server = express();

mongoose.connect('mongodb://localhost:27017/Nursary').then(() => {
    console.log('Connected to the database');
    server.listen(8080, () => {
        console.log('Server is running on port 8080');
    });
}).catch((error) => {
    console.log('Error connecting to the database');
    console.log(error + '');
});


//=======middleware=======
server.use(morgan('dev'));
server.use(cors());


//--------------- settings
server.use(express.json());
//=======routes=======
server.use(teacherRoute);
server.use(childRoute);
server.use(classRoute);
//=========not found middleware=========
server.use((request, response, next) => {
    console.log("not found middleware");
    response.status(404).json({ message: "not found" });

});
//=======error handling middleware=======

server.use((error, request, response, next) => {
    console.log("Error middleware");
    response.status(500).json({ message: error + '' });
});