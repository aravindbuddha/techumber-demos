var Item=(function(){
  return{
    init:function(){
    
      this.call_related_posts_widget();
      this.make_demo_dl_links();
      this.call_pretty_print();
    },
    call_related_posts_widget:function(){
      relatedPostsWidget({
        related_title: "Related Posts",
        containerSelector: "#related_posts",
        maxPosts: 6,
        loadingClass: "loadingxx",
        rlt_thumb: 70
      });
    },
    make_demo_dl_links:function(){
      var 
        demoa=$('.demo'),
        demoaval=demoa.attr("href"),
        title=$('.post-title').text(),
        newdemoval=demoaval+"&backto="+window.location.href+"&title="+title,
        downa=$('.download'),
        downaval=downa.attr("href"),
        newdownval=downaval+"&backto="+window.location.href+"&title="+title;
        demoa.attr('href',newdemoval);
        demoa.append('<link rel="prefetch" href="'+newdemoval+'" />');  
        downa.attr('href',newdownval);
        downa.append('<link rel="prefetch" href="'+newdownval+'" />');
    },
    call_pretty_print:function(){
      $(function(){
        $('.code').addClass('prettyprint linenums');
        prettyPrint();
    
      });
        
    }
  }
}());

Item.init();
