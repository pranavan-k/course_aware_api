const express= require('express');
import Express from 'express';
const cors = require('cors');

const mongoose = require('mongoose');
const functionProblems = require('./models/functions');
require('dotenv').config();

const ProblemRouter = require('./routes/problems');

const app = express();
app.use(cors())
const PORT = 5000

mongoose.connect(
    process.env.MONGODB_URI
);

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});

app.use("/api/problems", ProblemRouter);