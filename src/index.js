window.$ = window.jQuery = require('jquery')
window.Popper = require('popper.js')
require('bootstrap')

var WebFont = require('webfontloader');

WebFont.load({
google: {
  families: ['Quicksand:300,400:latin-ext']
}
});

import './scss/index.scss'
//console.log("hello world!")

// use tooltip and popover components everywhere
$(function (){
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})
