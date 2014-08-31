requirejs.config({
  //By default load any module IDs from js/lib\\
  urlArgs: "bust=" + (new Date()).getTime(),
  baseUrl: '//demos.techumber.com/blogger/',
  paths: {
    jquery: "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min",
    easing: "lib/easing",
    // isotope: "lib/isotope",
    hovertiemout: "lib/jquery.hovertimeout",
    preload: "lib/jquery.preload",
    home: "app/home",
    common: "app/common",
    app: "app/app",

  },
  map: {
    '*': {
      'css': 'lib/requirejs/plugins/require-css/css.min' // or whatever the path to require-css is
    }
  },
  shim: {
    'lib/easing': ['//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'],
    'lib/jquery.hoverxa': ['//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'],
    'lib/jquery.motio': {
      deps: ['//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'],
      exports: 'Motio'
    },
    'lib/jquery.isotope': {
      deps: ['//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'],
      exports: 'jQuery.fn.isotope'
    },

    'lib/jquery.preload': ['//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'],
    'lib/jquery.hovertimeout': {
      deps: ['//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'],
      exports: 'jQuery.fn.hoverTimeout'
    }
  }
});

require(['app'], function (App) {
  App.init();
  // var page_type=window.tu_page_type;
  // require('css!template/css/common.css');
  // if(page_type =="index"){
  //   require('css!template/css/page.css');
  // }

});