const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');

const nextSettings = {
    exportTrailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
        };
    },
};

module.exports = withPlugins([[withCSS()]]);
module.exports = {
    // Target must be serverless
    target: 'serverless'
};