const mongoose = require('mongoose');
const config = require('../config/dev');
const fakeDb = require('./fakeDb');


    mongoose.connect('mongodb+srv://Kaur_database:KaurPortfolioDatabase@cluster0.4uyil.mongodb.net/kaurPortfolioDb?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //  useFindAndModify: false,
            // useCreateIndex: true,
        }, async () => {
            console.log("starting populating DB.....");
            await fakeDb.populate();
            await mongoose.connection.close();
            console.log("DB has been populated")
        })