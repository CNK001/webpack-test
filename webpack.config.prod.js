const webpack = require('webpack')
const pkg = require('./webpack.variables.js')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const path = require('path')
const extractSass = new ExtractTextPlugin({
  filename: pkg.dist_css+"styles.css",
});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: pkg.dist_js+'app.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', { modules: false }]
            ]
          }
        }]
      },
      {
        test: /\.(scss)$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [
            {
              loader: "css-loader", // translates CSS into CommonJS
              options: {
                //modules: true,
                url: false
              }
            },
            {
              loader: 'postcss-loader' //load autoprefixer
            },
            {
              loader: 'resolve-url-loader'
            },
            {
              loader: "sass-loader" // compiles Sass to CSS
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
        // {output}/to/file.txt
        //{ from: 'from/file.txt', to: 'to/file.txt' },

        // {output}/to/directory/file.txt
        //{ from: 'from/file.txt', to: 'to/directory' },

        // Copy directory contents to {output}/to/directory/
        { from: 'src/img/', to: pkg.dist_img },

        // Copy glob results to /absolute/path/
        //{ from: 'from/directory/**/*', to: '/absolute/path' },
    ], {
        // ignore: [
        //     // Doesn't copy any files with a txt extension
        //     '*.txt',

        //     // Doesn't copy any file, even if they start with a dot
        //     '**/*',

        //     // Doesn't copy any file, except if they start with a dot
        //     { glob: '**/*', dot: false }
        // ],

        // By default, we only copy modified files during
        // a watch or webpack-dev-server build. Setting this
        // to `true` copies all files.
        copyUnmodified: true
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Popper: ['popper.js', 'default']
    }),
    extractSass
  ]
};