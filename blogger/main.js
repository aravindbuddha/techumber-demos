requirejs.config({
  //By default load any module IDs from js/lib\\
  urlArgs: "bust=" + (new Date()).getTime(),
  baseUrl: '//demos.techumber.com/blogger/',
  paths: {
    jquery: "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min",
    easing:"lib/easing",
    isotope:"lib/isotope",
    hovertiemout:"lib/jquery.hovertimeout",
    hoverxa:"lib/jquery.hoverxa",
    motio:"lib/jquery.motio",
    preload:"lib/jquery.preload",
    css:"lib/requirejs/plugins/css.min",
    home:"template/js/home",
    script:"template/js/scripts",
    app:"app/app",
    scripts:"template/js/scripts"
  },
   map: {
    '*': {
      'css': 'lib/requirejs/plugins/require-css/css.min' // or whatever the path to require-css is
    }
  },
  shim: {
    'lib/easing': ['//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'],
    'lib/jquery.hovertimeout': ['//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'],
    'lib/jquery.hoverxa': ['//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'],
    'lib/jquery.motio': ['//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'],
    'lib/jquery.preload': ['//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js']
  }
});

require(['app'],function(App){
     App.init();
      // var page_type=window.tu_page_type;
      // require('css!template/css/common.css');
      // if(page_type =="index"){
      //   require('css!template/css/page.css');
      // }
    
});
