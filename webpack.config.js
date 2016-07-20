


const NODE_ENV = process.env.NODE_ENV || 'dev';
const webpack = require('webpack');
console.log(NODE_ENV);



module.exports = {


  context: require('path').join(__dirname, 'src'),


  entry: {
    //app0: './app',
    app02: './app02',
    app03: './app03',
    app04: './app04',
    app05: './app05',
    app06: './app06',
    //common: './first/common',
  },


  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    library: '[name]'
  },


  watch: NODE_ENV == 'dev',


  watchOptions: {
    aggregateTimeout: 80
  },


  devtool: NODE_ENV == 'dev' ? 'cheap-inline-module-source-map' : null,


  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2,
      //chunks: ['app','app2']
    }),
  ],


  resolve: {
    moduleDirectories: ['node_modules'],
    extensions: ['', '.js'],
    /*alias: {
     config: path.join(__dirname, 'config', process.env.NODE_ENV)
     }*/
  },


  resolveLoader: {
    moduleDirectories: ['node_modules'],
    //moduleTemplates: ['*.loader'],
    extensions: ['', '.js'],
  },


  module: {

    loaders: [{
      test: /\.jsx?/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
      }
    }]

  },


};



if(NODE_ENV == 'prod'){
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}