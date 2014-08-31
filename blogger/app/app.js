define(['require'], function (require) {
  var page_type = window.tu_page_type;
  return {
    init: function () {
      require(['common', 'css!template/css/common.css', ]);
      if (page_type == "index") {
        require(['home', 'css!template/css/page.css']);
      }
    }
  }
});