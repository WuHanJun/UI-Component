module.exports = {
    entry: {
        app: './main.js'
    },
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015'
            },
            {
                test: /\.css/,
                exclude: /node_mudules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'url-loader?importLoaders=1&limit=1000&name=./font/[name].[ext]'
            }
        ]
    },
    resolve: {
        alias: {
            videoJs: 'video.js/dist/video.js',
            videoCss: 'video.js/dist/video-js.css'
        }
    },
    externals: {
        jquery: 'window.$'
    }
}
