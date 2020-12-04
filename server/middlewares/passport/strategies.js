
const {Strategy} = require('passport-strategy');


//Strategy get options needs to authenticate users
//it has to have an authenticate function
class GraphqlStrategy extends Strategy{

    constructor(verify) {
        super();

        if(!verify){
            throw new Error('Graphql strategy requires a verify callback')
        }

        this.verify = verify;
        this.name = 'graphql'
    }

    authenticate(_, options){

        const done = (error, user, info) =>{ //will receive error , user and info

            if(error) this.error(error);

            if(!user) this.fail(401);

            return this.success(user, info);

        };

        this.verify(options, done) //this is getting called in passport/index.js file with done fun
    }
}

module.exports = GraphqlStrategy;