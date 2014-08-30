requirejs.config({
  //By default load any module IDs from js/lib\\
  urlArgs: "bust=" + (new Date()).getTime(),
  baseUrl: '//demos.techumber.com/blogger/',
  paths: {
    jQuery: "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min",
    easing:"lib/easing",
    isotope:"lib/isotope",
    hovertiemout:"lib/jquery.hovertimeout",
    hoverxa:"lib/jquery.hoverxa",
    motio:"lib/jquery.motio",
    preload:"lib/jquery.preload",
    css:"lib/requirejs/plugins/css.min",
    home:"template/js/home.js",
    script:"template/js/scripts",
    app:"/app/app.js",
    scripts:"template/js/scripts"
  }
});

require(['app'],function(App){
    App.init();
  });
