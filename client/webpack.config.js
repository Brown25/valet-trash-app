const path = require('path');

module.exports = {
    // Entry point for the application
    entry: './src/index.js',

    // Output configuration
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    // Mode: 'development' or 'production'
    mode: 'development', // Use 'production' for optimized builds

    // Module rules (loaders)
    module: {
        rules: [
            {
                test: /\.js$/, // Process JavaScript files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/, // Process CSS files
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/, // Process image files
                type: 'asset/resource'
            }
        ]
    },

    // DevServer configuration
    devServer: {
        static: path.resolve(__dirname, 'dist'), // Serve content from "dist" folder
        port: 3000, // Port for the development server
        open: true, // Automatically open the browser
        hot: true, // Enable hot module replacement
        historyApiFallback: true // Fallback to index.html for SPAs
    },

    // Source maps for easier debugging
    devtool: 'source-map'
};