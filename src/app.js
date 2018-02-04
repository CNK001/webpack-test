// load assets
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./img/', true));

window.$ = window.jQuery = require('jquery')
window.Popper = require('popper.js')
require('bootstrap')

var WebFont = require('webfontloader');

WebFont.load({
  google: {
    families: ['Quicksand:300,400:latin-ext']
  },
  custom: {
    families: ['Ionicons'],
    urls: ['assets/css/ionicons.css']
  }
});

import './scss/index.scss'
//console.log("hello world!")

// use tooltip and popover components everywhere
$(function (){
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})

import './css/ionicons.css'
