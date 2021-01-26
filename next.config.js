
const path = require('path');
const webpack = require('webpack');

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
   // useFileSystemPublicRoutes: false,
    webpack: config=>{

        config.resolve.alias['@'] = path.resolve(__dirname);

       // config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
        return config;
    },
    env:{
        BASE_URL: dev? 'http://localhost:3000/graphql':'https://hardeepkaur.herokuapp.com/graphql'
    }
}