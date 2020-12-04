

const mongoose = require('mongoose');

const config = require('../config/dev');

const session = require('express-session');

const mongoDBStore = require('connect-mongodb-session')(session);

require('./models/portfolio');
require('./models/user');

exports.connect = () =>{
    mongoose.connect(process.env.DB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        }, ()=>{
        console.log("connected to DB")
    })
};

exports.initSessionStore = () =>{
    const store = new mongoDBStore({
        uri: process.env.DB_URI,
        collection: 'portfolioSessions'
    });
    return store;
}
