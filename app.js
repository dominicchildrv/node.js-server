// app.js

const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/user.router');
const userAtrRouter = require('./routers/user.atr.router');
const errorHandler = require('./errorhandler'); // Import the error handling middleware
const cors = require('cors');


const app = express();

app.use(cors());


app.use(bodyParser.json());

app.use('/', userRouter);
app.use('/', userAtrRouter);

// Error handling middleware
app.use(errorHandler);

module.exports = app;