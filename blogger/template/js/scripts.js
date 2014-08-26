   function resizeThumb(e,b){var c=document.getElementById(e),d=c.getElementsByTagName("img");for(var a=0;a<d.length;a++){d[a].src=d[a].src.replace(/\/s72\-c/,"/w"+b);d[a].width=b}}














    function accordx(b){$(b+" .widget-content").hide();$(b+" h2:last").addClass("active").next().slideDown("slow");$(b+" h2").css("cursor","pointer").click(function(){if($(this).next().is(":hidden")){$(b+" h2").removeClass("active").next().slideUp("slow");$(this).toggleClass("active").next().slideDown("slow")}})};