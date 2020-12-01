
const path = require('path');
const webpack = require('webpack');

module.exports = {
    useFileSystemPublicRoutes: false,
    webpack: config=>{

        config.resolve.alias['@'] = path.resolve(__dirname);

       // config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
        return config;
    }
}