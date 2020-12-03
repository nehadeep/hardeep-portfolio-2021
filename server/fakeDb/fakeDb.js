const {portfolios, users} = require('./data');

const Portfolio = require('../database/models/portfolio');

const User = require('../database/models/user');


class FakeDb {

    async cleanData(){
        await User.deleteMany({});

        await Portfolio.deleteMany({});
    }

   async addData(){
       await User.create(users);
       await Portfolio.create(portfolios);
    }

    async populate(){
        await this.cleanData();
        await this.addData();
    }



}

module.exports = new FakeDb();