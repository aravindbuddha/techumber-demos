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
    home:"template/js/home.js",
    script:"template/js/scripts",
    app:"app/app.js",
    scripts:"template/js/scripts"
  },
  shim: {
    'lib/easing': ['//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min'],
    'lib/jquery.hovertimeout': ['//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min'],
    'lib/jquery.hoverxa': ['//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min'],
    'lib/jquery.motio': ['//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min'],
    'lib/jquery.preload': ['//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min']
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
