// dotenv
require('dotenv').config()
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

// express
const express = require('express'); 
const app = express(); 

// mongoose
const mongoose = require('mongoose'); 
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 
const db = mongoose.connection; 
db.on('open', ()=>{
    console.log('OpenPicSearchAPI is connected to Mongo')
});

// Middleware //
// app.use(cors());
app.use(express.json());
// const path = require('path'); 
// const cors = require('cors'); 

// Cxn Test
app.get('/', (req, res)=>{
    res.send('Back is connected')
});

// Controller(s)
app.use('/api/collections', require('./controllers/collections')); 

// Listener
app.listen(PORT, ()=>{
    console.log('DEVCON4 backend is awake and listening', PORT)
});