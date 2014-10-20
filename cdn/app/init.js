var App = (function(){
  var
    base_url="//demos.techumber.com/cdn/",
    site_array=[
      // base_url+"asserts/css/style.css",
      "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js",
      base_url+"js/lib/easing.js",
      base_url +"js/lib/motio.js",
      base_url+"js/lib/preload.js",
      base_url+"js/lib/hover.js",
      base_url+"js/site.js",
      base_url+"app/dpage.js"
  ],
  index_array=[
    // base_url+"asserts/css/index.css", 
    base_url+"js/lib/isotope.js",
    base_url+"js/index.js"
  ],
  item_array=[
    // base_url+"asserts/css/item.css",
    base_url+"js/lib/prettify/prettify-dark.css",
    base_url+"js/lib/prettify/prettify.js",
    base_url+"js/lib/related-posts.js",
    base_url+"js/item.js"
  ],
  static_array=[
    base_url+"asserts/css/static.css"
  ];


  return {
    init:function(){
      var self=this;
      TU.load_on_dom_ready(function () {
        TU.load(site_array, function () {
          console.log("All Scripts Loaded");
          self.load_all();
        })
      });
    },
    load_all:function(){
      if(TU_PAGE == "index"){
        $("body").addClass('index').removeClass('static item');
          console.log(index_array);
         TU.load(index_array,function(){
            console.log("index array loadded....");
            Index.init();
          });
      }
      if(TU_PAGE == "item"){
        TU.load(item_array,function(){
          $("body").addClass('item').removeClass('static index');
          console.log("item array loadded....");
          Item.init();
        });
      }
      if(TU_PAGE == "static_page"){
         TU.load(static_array,function(){
          $("body").addClass('static').removeClass('item index');
          console.log("item array loadded....");
        });
      }
    }
  }
}());



App.init();



