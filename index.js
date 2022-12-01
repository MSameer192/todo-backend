//jshint esversion: 6

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')



////////////////////////////////////////////////////////////////////////////////////////////////////////////



// ========================== ROUTES START 

const routes = require('./routes/routes');


app.use(express.json());
app.use(express.urlencoded((extended=true)))
app.use('/api', routes)


// ========================== ROUTES END  


////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ========================== DB & SERVER CONNCENTION CODE 

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

// ========================== END DB & SERVER CONNCENTION CODE 

app.use(cors());


////////////////////////////////////////////////////////////////////////////////////////////////////////////
