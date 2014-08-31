define(['require', 'util'], function (require, util) {
  var page_type = window.tu_page_type;
  return {
    init: function () {
      require(['lib/jquery.preload', 'css!template/css/common.css', 'scripts']);
      if (page_type == "index") {
        require(['home', 'css!template/css/page.css']);
      }
    }
  }
});