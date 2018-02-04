'use strict';

var util = require('util');

module.exports = {
  src: './src/img/sprite/**/*.{png,gif,jpg}',
  dest: "sprites.png",
  destImage: './src/img/sprite.png',
  imgPath: './img/sprite.png',
  destCSS: './src/css/sprites.css',
  padding: 0,
  algorithm: 'binary-tree',
  cssOpts: {
    cssClass: function (item) {
      return util.format('.ico-%s:before', item.name);
    }
  }
};
