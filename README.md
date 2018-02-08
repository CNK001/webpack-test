# Webpack 3 - pack by spoko.space
Build set-up based on Webpack 3 and npm scripts for common needs.

## Packages
1. Bootstrap 4
2. Ionicons 4
3. WebFont Load
4. Waves
5. CSS Sprites
6. Autoprefixer
7. Minify PNG, JPEG, GIF, SVG and WEBP images

## Webpack 3 Plugins
* copy-webpack-plugin
* extract-text-webpack-plugin
* html-webpack-plugin (coming soon)
* clean-webpack-plugin (soon)

## Webpack 3 Loaders
* babel-loader
* image-webpack-loader
* file-loader
* css-loader
* resolve-url-loader
* postcss-loader
* style-loader
* sass-loader
* html-loader (soon)

## Try out
```powershell
# Install nodejs dependencies
yarn

# Develop output
yarn run build:prod 

# Production-ready output
yarn run build:dev 

# Build sprites from images in src/imag/sprite/
yarn run sprites 

# Open `\public\index.htm`-file in browser and watch the result.
```

## Related links
* [WebFont Loader](https://github.com/typekit/webfontloader)
* [Bootstrap 4](https://github.com/twbs/bootstrap)
* [Ionicons 4](https://github.com/ionic-team/ionicons)
* [PostCSS](http://postcss.org)
* [Sass (SCSS)](http://sass-lang.com)
* [Waves](https://github.com/fians/Waves)
* [Webpack](https://webpack.js.org)
* [Yarn](https://yarnpkg.com/lang/en/)
* [Node.js](https://nodejs.org/en/)