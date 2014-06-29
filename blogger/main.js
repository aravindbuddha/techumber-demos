requirejs.config({
  //By default load any module IDs from js/lib\\
  //  urlArgs: "bust=" + (new Date()).getTime(),
  baseUrl: 'http://demos.techumber.com/blogger/',
  paths: {
    jQuery: "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"
  }

});
require(['app/dpage.js'], function (Dpage) {
  Dpage.init();
});