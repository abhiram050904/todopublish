const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://abhiram050904:abhi@abhicluster.hi0upel.mongodb.net/?retryWrites=true&w=majority&appName=abhicluster";

mongoose.connect(DB_URL)
    .then(() => {
        console.log('MongoDB is Connected...');
    }).catch((err) => {
        console.log('MongoDB Conn Error...', err);
    })