const webpack = require('webpack')
const pkg = require('./webpack.variables.js')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const extractStyles = new ExtractTextPlugin({ filename: pkg.dist_css+'[name].css' })

module.exports = {
  entry: {
    app: './src/app.js',
    fonts: './src/fonts.js',
    subpage: './src/subpage.js'
  },
  output: {
    filename: pkg.dist_js+'[name].js',
    sourceMapFilename: "[file].map",
    path: path.resolve(__dirname, 'public')
  },
  //devtool: 'source-map',
  devtool: 'inline-source-map',
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
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: [/fonts/],
        loaders: ['file-loader?context=src/img&name=../'+pkg.src_tmp+'img-compressed/[path][name].[ext]', {
          // loaders: ['lowercase-file', 'image-webpack-loader'],
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
              quality: 70
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 7,
            },
            pngquant: {
              quality: '75-85',
              speed: 1
            },
          },
        }],
        include: __dirname,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]'
      },
      {
        test: /\.css$/,
        use: extractStyles.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: "css-loader", // translates CSS into CommonJS
              options: {
                //modules: true,
                sourceMap: true
                //url: false //disable checking path to images etc.
              }
            },
            {
              loader: 'postcss-loader' //load autoprefixer
            },
            {
              loader: 'resolve-url-loader'
            },
          ]
        })
      },
      {
        test: /\.(scss)$/,
        use: extractStyles.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [
            {
              loader: "css-loader", // translates CSS into CommonJS
              options: {
                //modules: true,
                sourceMap: true,
                url: false //disable checking path to images etc.
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
        // Copy directory contents to {output}/to/directory/
        { 
          from: pkg.src_tmp+'img-compressed/', 
          to: pkg.dist_img+'[path][name].[ext]'
        }
        // ,
        // {
        //   from: './node_modules/ionicons/dist/fonts',
        //   to: pkg.dist_fonts
        // }

        // Copy glob results to /absolute/path/
        //{ from: 'from/directory/**/*', to: '/absolute/path' },
    ], {
        // ignore: [
        //     // Doesn't copy any files with a txt extension
        //     '*.txt',
        // ],

        // By default, we only copy modified files during
        // a watch or webpack-dev-server build. Setting this
        // to `true` copies all files.
        copyUnmodified: true
    }
  ),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Popper: ['popper.js', 'default']
    }),
    extractStyles
  ]
};
