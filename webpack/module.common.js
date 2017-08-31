const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sassLoader = ExtractTextPlugin.extract(
    'css-loader!sass-loader'
);

const babelOptions = JSON.stringify({
    presets: ['react', 'env']
});
const babelLoader = `babel-loader?${babelOptions}`;

module.exports = {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: [babelLoader]
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: sassLoader
        },
        {
            test: /logo\.png/,
            loader: 'file-loader',
            query: {
                name: 'assets/favicon.png',
                publicPath: '../'
            }
        },
        {
            test: filename => {
                if (filename.match(/logo\.png/)) {
                    return false;
                }
                return filename.match(/\.(woff2?|ttf|eot|svg|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/);
            },
            loader: 'file-loader',
            query: {
                name: 'assets/[hash].[ext]',
                publicPath: '../'
            }
        },
    ]
};

