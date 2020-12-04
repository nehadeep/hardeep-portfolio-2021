const GraphqlStrategy= require('./strategies');

const User = require('../../database/models/user')

exports.init = (passport) =>{

    passport.serializeUser((user, done)=>{
        done(null, user.id)
    });

    passport.use('graphql', new GraphqlStrategy(({email, password}, done)=>{

        User.findOne({email}, (err, user)=>{
            if(err) return done(err);

            if(!user) return done(null, false);

            user.validatePassword(password, (err, isMatching)=>{

                if(err) done(err);
                if(!isMatching) done(null, false);

                return done(null, user)

            })
        })
    }));
}