//calling animation

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




     accordx ('#sidebar-wtengah');
      hoverxa (); 
      (function(){$("#navinti ul").removeClass("hidden");$("#navinti li").hoverTimeout(100,function(){$(this).parent("ul").css("overflow","visible");$(this).children("ul").filter(":not(:animated)").slideDown()},500,function(){$(this).parent("ul").css("overflow","visible");$(this).children("ul").slideUp(800,"easeInExpo")});$("#mobilenav").toggle(function(){$(this).addClass("active");$("#navinti").slideDown();return false},function(){$(this).removeClass("active");$("#navinti").slideUp();return false});function a(){if($(window).width()>767){$("#navinti").css("display","block")}else{if($(window).width()<=767&&$("#mobilenav").attr("class")==="active"){$("#navinti").css("display","block")}else{if($(window).width()<=767&&$("#mobilenav").attr("class")!=="active"){$("#navinti").css("display","none")}}}}$(window).resize(a)})();
      var searchFormConfig = {  
        numPost: 9999, // Jumlah maksimal temuan
        summaryPost: true, // 'true' jika ingin menampilkan deskripsi posting
        summaryLength: 100, // Jumlah karakter ringkasan posting
        resultTitle: "Result For Keyword", // Judul hasil pencarian
        noResult: "No result", // Deskripsi 'tak ditemukan'
        resultThumbnail: true, // 'true' untuk menampilkan thumbnail posting
        thumbSize: 150, // Ukuran & resolusi thumbnail
        fallbackThumb: "http://1.bp.blogspot.com/-gIdQCoMIkSk/UYl-cRQtiHI/AAAAAAAAJC0/p9xZetaajI8/s000/grey.png" // Fallback thumbnail untuk posting tak bergambar
      };




       //<![CDATA[
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
        //]]>