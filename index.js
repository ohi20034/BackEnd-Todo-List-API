const express = require('express');
const mongoose = require('mongoose');
const todoRoute = require('./routes/todoRoutes.js')
const errorHandler = require('./utils/errorHandler');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
// middleware 
app.use(express.json());
app.use(errorHandler);

//routes
app.use('/api/v1/todo', todoRoute);


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected!');
        app.listen(process.env.PORT, () => {
            console.log('server is running on port 3000');
        })
    })
    .catch(() => {
        console.log("Connection failed");
    });