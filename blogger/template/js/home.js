   function resizeThumb(e,b){var c=document.getElementById(e),d=c.getElementsByTagName("img");for(var a=0;a<d.length;a++){d[a].src=d[a].src.replace(/\/s72\-c/,"/w"+b);d[a].width=b}}



   

 resizeThumb("Blog1", 300);
 datenya();

 function isonyax() {
   var a = jQuery(".blog-posts.hfeed");
   var b;
   if (a.width() < 320) {
     b = 1
   } else {
     if (a.width() < 500) {
       b = 2
     } else {
       if (a.width() < 720) {
         b = 3
       } else {
         b = 4
       }
     }
   }
   a.isotope({
     itemSelector: ".post",
     resizable: false,
     masonry: {
       columnWidth: a.width() / b
     }
   })
 };
 jQuery(window).load(isonyax);
 jQuery(window).smartresize(isonyax);
 (function (e) {
   var h = "http://3.bp.blogspot.com/-iz_MSJzLKJ4/UYl-et5D0iI/AAAAAAAAJDE/TtbzqCN-45I/s000/ajax-loader.gif";
   var i = "";
   var b = null;
   var a = "div.blog-posts";
   var d = false;
   var g = e(window);
   var k = e(document);
   var f = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

   function c(m) {
     e.getScript("http://" + m + ".disqus.com/blogger_index.js")
   }

   function j() {
     if (d) {
       return
     }
     d = true;
     if (!i) {
       b.hide();
       return
     }
     b.find("a").hide();
     b.find("img").show();
     e.get(i, "html").done(function (o) {
       var m = e("<div></div>").append(o.replace(f, ""));
       var n = m.find("a.blog-pager-older-link");
       if (n) {
         i = n.attr("href")
       } else {
         i = "";
         b.hide()
       }
       var p = m.find(a).children(".date-outer");
       e(a).append(p);
       resizeThumb("Blog1", 200);
       hoverxa();
       datenya();
       if (window._gaq) {
         window._gaq.push(["_trackPageview", i])
       }
       if (window.gapi && window.gapi.plusone && window.gapi.plusone.go) {
         window.gapi.plusone.go()
       }
       if (window.disqus_shortname) {
         c(window.disqus_shortname)
       }
       if (window.FB && window.FB.XFBML && window.FB.XFBML.parse) {
         window.FB.XFBML.parse()
       }
       e(a).isotope("insert", p);
       setTimeout(function () {
         e(a).isotope("insert", p)
       }, 1000);
       b.find("img").hide();
       b.find("a").show();
       d = false
     })
   }

   function l() {
     if (_WidgetManager._GetAllData().blog.pageType == "item") {
       return
     }
     i = e("a.blog-pager-older-link").attr("href");
     if (!i) {
       return
     }
     var n = e('<a class="loadpost" href="javascript:;">Load more posts</a>');
     n.click(j);
     var m = e('<img class="imgload" src="' + h + '" style="display: none;">');
     b = e('<div style="text-align: center; font-size: 140%;"></div>');
     b.append(n);
     b.append(m);
     b.insertBefore(e("#blog-pager"));
     e("#blog-pager").hide()
   }
   e(document).ready(l)
 })(jQuery);