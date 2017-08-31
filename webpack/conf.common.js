const path = require('path');

const plugins = require('./plugin.common');

module.exports = {
    entry: ['./src/game'],
    output: {
        path: path.join(__dirname, '../static'),
        filename: 'js/bundle.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss']
    },
    plugins,
    node: {
        fs: 'empty'
    }
};

