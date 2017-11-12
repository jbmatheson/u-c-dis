var config = {
   entry: './main.js', // entry point
   output: {
         filename: 'index.js', // place where bundled app will be served
      },
   devServer: {
         inline: true, // autorefresh
         port: 8080 // development port server
      },
   module: {
      loaders: [{
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
           "presets": ["react", "es2015", "stage-0", "react-hmre"]
         }
      }, {
         test: /\.(jpg|png|svg)$/,
         loader: 'url-loader',
         options: {
           limit: 25000,
         },
      }, {
         test: /\.json?$/,
         loader: 'json-loader'
      }, {
         test: /\.s[ac]ss$/,
         loaders: ["style-loader", "css-loader", "sass-loader"]
      }]
   }
}
module.exports = config;