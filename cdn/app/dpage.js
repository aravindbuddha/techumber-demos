
var Dpage=(function(){
  var
    $my_domain = window.location.host,
    $main = $('#main-wrapper');
  return {
    init: function () {
      this.events();
      ///
    },
    events: function () {
      var self = this;
      $('a').on('click', function (e) {
         var url = $(this).attr('href');
        if(is_my_domain(url)){
           e.preventDefault();
          history.pushState(null, null, url);
          self.load_content(url);
        }
      });
    },
    load_content: function (url) {
      var self = this;
      if (this.is_my_domain(url)) {
        console.log("loading " + url + ">>>>>>>>>>");
        $("#main-wrapper").css({'opacity': 0.5});
        $main.load(url + " #main", function () {
          window.TU_PAGE=$('.tu_type').data('value');
          $("#main-wrapper").css({'opacity': 1});
          self.triggers();
        });
      }
    },
    is_my_domain: function (url) {
      if (url.indexOf($my_domain) > -1) {
        return true;
      }
      return false;
    },
    triggers: function () {
      App.load_all();
      this.events();
    },
    set_class:function(){
        
    },
    load_comments: function () {
      BLOG_CMT_createIframe('https://www.blogger.com/rpc_relay.html', '05812328105391254280');

      //
    }
  }

}());

Dpage.init();