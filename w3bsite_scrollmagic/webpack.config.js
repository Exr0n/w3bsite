const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./src/index.mjs'],
    output: {
        path: path.resolve(__dirname, 'public/'),
        filename: 'bundle.js',
    },
};

