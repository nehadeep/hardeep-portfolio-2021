const passport = require('passport');


const authenticateUser = (req, opts)=>{

    return new Promise((resolve, reject)=>{

        const done = (err, user) =>{
            //if user is authenticate then we can save session to db
            if(err){
                reject(new Error(err))
            }
            if(user){
                req.login(user, (error)=>{

                    if(error) reject(new Error(error));

                    return resolve(user);
                })

            } else reject(new Error('Invalid password or email.'));
        };

        const authFn = passport.authenticate('graphql', opts, done);

         authFn();

         })
};

exports.buildAuthContext = (req) =>{
    const auth = {
       authenticate: (options) => authenticateUser(req, options),
       logout:() => req.logout(),
       isAuthenticated: () =>req.isAuthenticated(),
        getUser:() => req.user

    };
    return auth;
}