const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //mode: "development",
    mode: "production",
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
  
    devtool: "source-map",
    devServer: {
        port: 4000,
        hot: true,
       
        static: path.resolve(__dirname, "public"),
        proxy: {

        },

    },
    resolve: {
        extensions: ['.js', '.jsx']
    }, 
    performance: {
        hints: process.env.NODE_ENV === "production" ? "error" : false,
        maxEntrypointSize: 580000,
        maxAssetSize: 580000,
      },   
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
              },
            {
                test: /\.(gif|png|jpe?g)$/i,
                use: [
                  "file-loader",
                  {
                    loader: "image-webpack-loader",
                    options: {
                      bypassOnDebug: true,
                      disable: true,
                    },
                  },
                ],
              },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            favicon:"./src/assets/static/icons/favicon.ico",
            template: './src/index.html'
        }),
    ]
};