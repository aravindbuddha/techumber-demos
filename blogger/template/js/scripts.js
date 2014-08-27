function resizeThumb(e, b) {
  var c = document.getElementById(e),
    d = c.getElementsByTagName("img");
  for (var a = 0; a < d.length; a++) {
    d[a].src = d[a].src.replace(/\/s72\-c/, "/w" + b);
    d[a].width = b
  }
}

function accordx(b) {
  $(b + " .widget-content").hide();
  $(b + " h2:last").addClass("active").next().slideDown("slow");
  $(b + " h2").css("cursor", "pointer").click(function () {
    if ($(this).next().is(":hidden")) {
      $(b + " h2").removeClass("active").next().slideUp("slow");
      $(this).toggleClass("active").next().slideDown("slow")
    }
  })
};

(function () {
  $("#navinti ul").removeClass("hidden");
  $("#navinti li").hoverTimeout(100, function () {
    $(this).parent("ul").css("overflow", "visible");
    $(this).children("ul").filter(":not(:animated)").slideDown()
  }, 500, function () {
    $(this).parent("ul").css("overflow", "visible");
    $(this).children("ul").slideUp(800, "easeInExpo")
  });
  $("#mobilenav").toggle(function () {
    $(this).addClass("active");
    $("#navinti").slideDown();
    return false
  }, function () {
    $(this).removeClass("active");
    $("#navinti").slideUp();
    return false
  });

  function a() {
    if ($(window).width() > 767) {
      $("#navinti").css("display", "block")
    } else {
      if ($(window).width() <= 767 && $("#mobilenav").attr("class") === "active") {
        $("#navinti").css("display", "block")
      } else {
        if ($(window).width() <= 767 && $("#mobilenav").attr("class") !== "active") {
          $("#navinti").css("display", "none")
        }
      }
    }
  }
  $(window).resize(a)
})();

var nbody=$('body'); 
$('[href]').each(function () {
  nbody.append('<a href="'+this.href+'" rel="prefetch" />');
});


accordx('#sidebar-wtengah');
hoverxa();



       /*emoticonx({
          emoRange:"#comments p, div.emoWrap",
          putEmoAbove:"iframe#comment-editor",
          topText:"Click to see the code!",
          emoMessage:"To insert emoticon you must added at least one space before the code."
        });*/


  datenya (); 
  
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



  $('body').jpreLoader({
            splashID: "#jSplash",
            showSplash: true,
            showPercentage: false,
            autoClose: true,
            splashFunction: function() {
            $('#ball, #ball-0, #ball-1').delay(250).animate({'opacity' : 1}, 1500, 'easeOutExpo');
            }
            }, function() { //callback function
            $("#outer-wrapper")
            .delay(150)
            .animate({'opacity' : 1,'marginTop': 0}, 500, 'easeOutExpo');

            $("#header-wrapper")
            .delay(200)
            .animate({'opacity' : 1,'marginTop': 0}, 500, 'easeOutExpo');

            $("#main-wrapper")
            .delay(250)
            .animate({'opacity' : 1,'marginLeft': 0}, 500, 'easeOutExpo');

            $("#sidebar-wrapper")
            .delay(300)
            .animate({'opacity' : 1,'marginRight': 0}, 500, 'easeOutExpo');
            });        








//moto animation

     var frame = $('#header-wrapper')[0];
    var motio = new Motio(frame, {
        fps: 30,
        speedX: 60,
        bgWidth: 1024,
        bgHeight: 1024
    });
    motio.play();

    // Update the animation speed & direction based on a cursor position
    $('#header-wrapper').on('mousemove', function (event) {
        motio.set('speedX', event.pageX - 0 - motio.width / 2);
        motio.set('speedY', event.pageY - 0 - motio.height / 2);
        
    });
    $('#header-wrapper').on('mouseout', function (event) {
        motio.set('speedX', 30);
        motio.set('speedY', 0);
        
    });
