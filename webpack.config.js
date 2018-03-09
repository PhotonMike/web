module.exports = [
    {
        entry: './src/index.js',
        module: {
            /*loaders: [
                {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
                {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
                {test: /\.css$/, loader: 'css-loader', exclude: /node_modules/}
            ]*/
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        output: {
            filename: "bundle.js",
            path: __dirname + '/public'
        }
    },

    {
        entry: './serviceWorker/sw.js',
        module: {
            /*loaders: [
                {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
                {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
                {test: /\.css$/, loader: 'css-loader', exclude: /node_modules/}
            ]*/
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }
            ]
        },
        output: {
            filename: "sw.js",
            path: __dirname + '/public'
        }
    }
];