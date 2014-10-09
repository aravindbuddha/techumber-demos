


var nbody=$('body');     $('[href]').each(function(){ nbody.append('<a href="+this.href+" rel="prefetch" />');});



        datenya (); 
        /*emoticonx({
          emoRange:"#comments p, div.emoWrap",
          putEmoAbove:"iframe#comment-editor",
          topText:"Click to see the code!",
          emoMessage:"To insert emoticon you must added at least one space before the code."
        });*/
        relatedPostsWidget({
          related_title: "Related Posts",
          containerSelector: "#related_posts",
          maxPosts: 6,
          loadingClass: "loadingxx",
          rlt_thumb: 70
        });
        $(document).ready(function(){
          var demoa=$('.demo');
          var demoaval=demoa.attr("href");
          var title=$('.post-title').text();
          var newdemoval=demoaval+"&backto="+window.location.href+"&title="+title;
          demoa.attr('href',newdemoval);
          demoa.append('<link rel="prefetch" href="'+newdemoval+'" />');
          var downa=$('.download');
          var downaval=downa.attr("href");
          var newdownval=downaval+"&backto="+window.location.href+"&title="+title;
          downa.attr('href',newdownval);
          downa.append('<link rel="prefetch" href="'+newdownval+'" />');
          $('.code').addClass('prettyprint linenums');
          prettyPrint();
          });